# `StrainProbe`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StrainProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StrainProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StrainProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#StrainProbe.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#StrainProbe.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#StrainProbe.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#StrainProbe.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#StrainProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#StrainProbe.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#StrainProbe.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#StrainProbe.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#StrainProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#StrainProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#StrainProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#StrainProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#StrainProbe.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#StrainProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#StrainProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#StrainProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#StrainProbe.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#StrainProbe.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#StrainProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#StrainProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#StrainProbe.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#StrainProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#StrainProbe.BeamSelection)                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#StrainProbe.BoundaryConditionSelection)       | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`Children`](#StrainProbe.Children)                                           | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#StrainProbe.Comments)                                           | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#StrainProbe.ContactRegionSelection)               | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#StrainProbe.CoordinateSystemSelection)         | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#StrainProbe.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#StrainProbe.DisplayTime)                                     | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#StrainProbe.DpfEvaluation)                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`EquivalentStrain`](#StrainProbe.EquivalentStrain)                           | Gets the EquivalentStrain.                                                                                                                                                 |
| [`Figures`](#StrainProbe.Figures)                                             | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#StrainProbe.GeometryLocation)                           | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#StrainProbe.Images)                                               | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#StrainProbe.InternalObject)                               | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#StrainProbe.IsSolved)                                           | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#StrainProbe.IterationNumber)                             | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#StrainProbe.LoadStep)                                           | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#StrainProbe.LoadStepNumber)                               | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#StrainProbe.LocationMethod)                               | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumEquivalentStrain`](#StrainProbe.MaximumEquivalentStrain)             | Gets the MaximumEquivalentStrain.                                                                                                                                          |
| [`MaximumMaximumPrincipalStrain`](#StrainProbe.MaximumMaximumPrincipalStrain) | Gets the MaximumMaximumPrincipalStrain.                                                                                                                                    |
| [`MaximumMiddlePrincipalStrain`](#StrainProbe.MaximumMiddlePrincipalStrain)   | Gets the MaximumMiddlePrincipalStrain.                                                                                                                                     |
| [`MaximumMinimumPrincipalStrain`](#StrainProbe.MaximumMinimumPrincipalStrain) | Gets the MaximumMinimumPrincipalStrain.                                                                                                                                    |
| [`MaximumNormalXAxisStrain`](#StrainProbe.MaximumNormalXAxisStrain)           | Gets the MaximumNormalXAxisStrain.                                                                                                                                         |
| [`MaximumNormalYAxisStrain`](#StrainProbe.MaximumNormalYAxisStrain)           | Gets the MaximumNormalYAxisStrain.                                                                                                                                         |
| [`MaximumNormalZAxisStrain`](#StrainProbe.MaximumNormalZAxisStrain)           | Gets the MaximumNormalZAxisStrain.                                                                                                                                         |
| [`MaximumPrincipalStrain`](#StrainProbe.MaximumPrincipalStrain)               | Gets the MaximumPrincipalStrain.                                                                                                                                           |
| [`MaximumStrainIntensity`](#StrainProbe.MaximumStrainIntensity)               | Gets the MaximumStrainIntensity.                                                                                                                                           |
| [`MaximumTotal`](#StrainProbe.MaximumTotal)                                   | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#StrainProbe.MaximumXAxis)                                   | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumXYShearStrain`](#StrainProbe.MaximumXYShearStrain)                   | Gets the MaximumXYShearStrain.                                                                                                                                             |
| [`MaximumXZShearStrain`](#StrainProbe.MaximumXZShearStrain)                   | Gets the MaximumXZShearStrain.                                                                                                                                             |
| [`MaximumYAxis`](#StrainProbe.MaximumYAxis)                                   | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumYZShearStrain`](#StrainProbe.MaximumYZShearStrain)                   | Gets the MaximumYZShearStrain.                                                                                                                                             |
| [`MaximumZAxis`](#StrainProbe.MaximumZAxis)                                   | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#StrainProbe.MeshConnectionSelection)             | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MiddlePrincipalStrain`](#StrainProbe.MiddlePrincipalStrain)                 | Gets the MiddlePrincipalStrain.                                                                                                                                            |
| [`MinimumEquivalentStrain`](#StrainProbe.MinimumEquivalentStrain)             | Gets the MinimumEquivalentStrain.                                                                                                                                          |
| [`MinimumMiddlePrincipalStrain`](#StrainProbe.MinimumMiddlePrincipalStrain)   | Gets the MinimumMiddlePrincipalStrain.                                                                                                                                     |
| [`MinimumMinimumPrincipalStrain`](#StrainProbe.MinimumMinimumPrincipalStrain) | Gets the MinimumMinimumPrincipalStrain.                                                                                                                                    |
| [`MinimumNormalXAxisStrain`](#StrainProbe.MinimumNormalXAxisStrain)           | Gets the MinimumNormalXAxisStrain.                                                                                                                                         |
| [`MinimumNormalYAxisStrain`](#StrainProbe.MinimumNormalYAxisStrain)           | Gets the MinimumNormalYAxisStrain.                                                                                                                                         |
| [`MinimumNormalZAxisStrain`](#StrainProbe.MinimumNormalZAxisStrain)           | Gets the MinimumNormalZAxisStrain.                                                                                                                                         |
| [`MinimumPrincipalStrain`](#StrainProbe.MinimumPrincipalStrain)               | Gets the MinimumPrincipalStrain.                                                                                                                                           |
| [`MinimumStrain`](#StrainProbe.MinimumStrain)                                 | Gets the MinimumStrain.                                                                                                                                                    |
| [`MinimumStrainIntensity`](#StrainProbe.MinimumStrainIntensity)               | Gets the MinimumStrainIntensity.                                                                                                                                           |
| [`MinimumStrainMaximumPrincipal`](#StrainProbe.MinimumStrainMaximumPrincipal) | Gets the MinimumStrainMaximumPrincipal.                                                                                                                                    |
| [`MinimumTotal`](#StrainProbe.MinimumTotal)                                   | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#StrainProbe.MinimumXAxis)                                   | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumXYShearStrain`](#StrainProbe.MinimumXYShearStrain)                   | Gets the MinimumXYShearStrain.                                                                                                                                             |
| [`MinimumXZShearStrain`](#StrainProbe.MinimumXZShearStrain)                   | Gets the MinimumXZShearStrain.                                                                                                                                             |
| [`MinimumYAxis`](#StrainProbe.MinimumYAxis)                                   | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumYZShearStrain`](#StrainProbe.MinimumYZShearStrain)                   | Gets the MinimumYZShearStrain.                                                                                                                                             |
| [`MinimumZAxis`](#StrainProbe.MinimumZAxis)                                   | Gets the MinimumZAxis.                                                                                                                                                     |
| [`NormalXAxisStrain`](#StrainProbe.NormalXAxisStrain)                         | Gets the NormalXAxisStrain.                                                                                                                                                |
| [`NormalYAxisStrain`](#StrainProbe.NormalYAxisStrain)                         | Gets the NormalYAxisStrain.                                                                                                                                                |
| [`NormalZAxisStrain`](#StrainProbe.NormalZAxisStrain)                         | Gets the NormalZAxisStrain.                                                                                                                                                |
| [`Orientation`](#StrainProbe.Orientation)                                     | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#StrainProbe.Properties)                                       | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#StrainProbe.RPMSelection)                                   | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#StrainProbe.RemotePointSelection)                   | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#StrainProbe.ResultSelection)                             | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#StrainProbe.SpatialResolution)                         | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#StrainProbe.SpringSelection)                             | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Strain`](#StrainProbe.Strain)                                               | Gets the Strain.                                                                                                                                                           |
| [`StrainIntensity`](#StrainProbe.StrainIntensity)                             | Gets the StrainIntensity.                                                                                                                                                  |
| [`Substep`](#StrainProbe.Substep)                                             | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#StrainProbe.Summation)                                         | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#StrainProbe.Suppressed)                                       | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#StrainProbe.SurfaceSelection)                           | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`Time`](#StrainProbe.Time)                                                   | Gets the Time.                                                                                                                                                             |
| [`Total`](#StrainProbe.Total)                                                 | Gets the Total.                                                                                                                                                            |
| [`Type`](#StrainProbe.Type)                                                   | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#StrainProbe.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#StrainProbe.XAxis)                                                 | Gets the XAxis.                                                                                                                                                            |
| [`XYShearStrain`](#StrainProbe.XYShearStrain)                                 | Gets the XYShearStrain.                                                                                                                                                    |
| [`XZShearStrain`](#StrainProbe.XZShearStrain)                                 | Gets the XZShearStrain.                                                                                                                                                    |
| [`YAxis`](#StrainProbe.YAxis)                                                 | Gets the YAxis.                                                                                                                                                            |
| [`YZShearStrain`](#StrainProbe.YZShearStrain)                                 | Gets the YZShearStrain.                                                                                                                                                    |
| [`ZAxis`](#StrainProbe.ZAxis)                                                 | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="StrainProbe.BeamSelection"></a>

### *property* StrainProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.BoundaryConditionSelection"></a>

### *property* StrainProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Children"></a>

### *property* StrainProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Comments"></a>

### *property* StrainProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.ContactRegionSelection"></a>

### *property* StrainProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.CoordinateSystemSelection"></a>

### *property* StrainProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.DataModelObjectCategory"></a>

### *property* StrainProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.DisplayTime"></a>

### *property* StrainProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.DpfEvaluation"></a>

### *property* StrainProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.EquivalentStrain"></a>

### *property* StrainProbe.EquivalentStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EquivalentStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Figures"></a>

### *property* StrainProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.GeometryLocation"></a>

### *property* StrainProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Images"></a>

### *property* StrainProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.InternalObject"></a>

### *property* StrainProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.IsSolved"></a>

### *property* StrainProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.IterationNumber"></a>

### *property* StrainProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.LoadStep"></a>

### *property* StrainProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.LoadStepNumber"></a>

### *property* StrainProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.LocationMethod"></a>

### *property* StrainProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumEquivalentStrain"></a>

### *property* StrainProbe.MaximumEquivalentStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumEquivalentStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumMaximumPrincipalStrain"></a>

### *property* StrainProbe.MaximumMaximumPrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMaximumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumMiddlePrincipalStrain"></a>

### *property* StrainProbe.MaximumMiddlePrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMiddlePrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumMinimumPrincipalStrain"></a>

### *property* StrainProbe.MaximumMinimumPrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMinimumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumNormalXAxisStrain"></a>

### *property* StrainProbe.MaximumNormalXAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalXAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumNormalYAxisStrain"></a>

### *property* StrainProbe.MaximumNormalYAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalYAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumNormalZAxisStrain"></a>

### *property* StrainProbe.MaximumNormalZAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalZAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumPrincipalStrain"></a>

### *property* StrainProbe.MaximumPrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumStrainIntensity"></a>

### *property* StrainProbe.MaximumStrainIntensity *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumStrainIntensity.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumTotal"></a>

### *property* StrainProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumXAxis"></a>

### *property* StrainProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumXYShearStrain"></a>

### *property* StrainProbe.MaximumXYShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXYShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumXZShearStrain"></a>

### *property* StrainProbe.MaximumXZShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXZShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumYAxis"></a>

### *property* StrainProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumYZShearStrain"></a>

### *property* StrainProbe.MaximumYZShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYZShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MaximumZAxis"></a>

### *property* StrainProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MeshConnectionSelection"></a>

### *property* StrainProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MiddlePrincipalStrain"></a>

### *property* StrainProbe.MiddlePrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MiddlePrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumEquivalentStrain"></a>

### *property* StrainProbe.MinimumEquivalentStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEquivalentStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumMiddlePrincipalStrain"></a>

### *property* StrainProbe.MinimumMiddlePrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMiddlePrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumMinimumPrincipalStrain"></a>

### *property* StrainProbe.MinimumMinimumPrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMinimumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumNormalXAxisStrain"></a>

### *property* StrainProbe.MinimumNormalXAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalXAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumNormalYAxisStrain"></a>

### *property* StrainProbe.MinimumNormalYAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalYAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumNormalZAxisStrain"></a>

### *property* StrainProbe.MinimumNormalZAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalZAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumPrincipalStrain"></a>

### *property* StrainProbe.MinimumPrincipalStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPrincipalStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumStrain"></a>

### *property* StrainProbe.MinimumStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumStrainIntensity"></a>

### *property* StrainProbe.MinimumStrainIntensity *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrainIntensity.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumStrainMaximumPrincipal"></a>

### *property* StrainProbe.MinimumStrainMaximumPrincipal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrainMaximumPrincipal.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumTotal"></a>

### *property* StrainProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumXAxis"></a>

### *property* StrainProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumXYShearStrain"></a>

### *property* StrainProbe.MinimumXYShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXYShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumXZShearStrain"></a>

### *property* StrainProbe.MinimumXZShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXZShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumYAxis"></a>

### *property* StrainProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumYZShearStrain"></a>

### *property* StrainProbe.MinimumYZShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYZShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.MinimumZAxis"></a>

### *property* StrainProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.NormalXAxisStrain"></a>

### *property* StrainProbe.NormalXAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalXAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.NormalYAxisStrain"></a>

### *property* StrainProbe.NormalYAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalYAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.NormalZAxisStrain"></a>

### *property* StrainProbe.NormalZAxisStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalZAxisStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Orientation"></a>

### *property* StrainProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Properties"></a>

### *property* StrainProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.RPMSelection"></a>

### *property* StrainProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.RemotePointSelection"></a>

### *property* StrainProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.ResultSelection"></a>

### *property* StrainProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.SpatialResolution"></a>

### *property* StrainProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.SpringSelection"></a>

### *property* StrainProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Strain"></a>

### *property* StrainProbe.Strain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.StrainIntensity"></a>

### *property* StrainProbe.StrainIntensity *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StrainIntensity.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Substep"></a>

### *property* StrainProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Summation"></a>

### *property* StrainProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Suppressed"></a>

### *property* StrainProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.SurfaceSelection"></a>

### *property* StrainProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Time"></a>

### *property* StrainProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Total"></a>

### *property* StrainProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Type"></a>

### *property* StrainProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.VisibleProperties"></a>

### *property* StrainProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.XAxis"></a>

### *property* StrainProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.XYShearStrain"></a>

### *property* StrainProbe.XYShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XYShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.XZShearStrain"></a>

### *property* StrainProbe.XZShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XZShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.YAxis"></a>

### *property* StrainProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.YZShearStrain"></a>

### *property* StrainProbe.YZShearStrain *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YZShearStrain.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.ZAxis"></a>

### *property* StrainProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StrainProbe.Activate"></a>

### StrainProbe.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.AddComment"></a>

### StrainProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.AddFigure"></a>

### StrainProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.AddImage"></a>

### StrainProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.ClearGeneratedData"></a>

### StrainProbe.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.CopyTo"></a>

### StrainProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.CreateParameter"></a>

### StrainProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Delete"></a>

### StrainProbe.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.Duplicate"></a>

### StrainProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.DuplicateWithoutResults"></a>

### StrainProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.EvaluateAllResults"></a>

### StrainProbe.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.ExportAnimation"></a>

### StrainProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.GetChildren"></a>

### StrainProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.GetParameter"></a>

### StrainProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.GroupAllSimilarChildren"></a>

### StrainProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.GroupSimilarObjects"></a>

### StrainProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.PropertyByAPIName"></a>

### StrainProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.PropertyByName"></a>

### StrainProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.RemoveParameter"></a>

### StrainProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.RenameBasedOnDefinition"></a>

### StrainProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.RetrieveResult"></a>

### StrainProbe.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="StrainProbe.SnapToMeshNodes"></a>

### StrainProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

