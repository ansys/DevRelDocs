# `StressProbe`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StressProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StressProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#StressProbe.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#StressProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#StressProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#StressProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#StressProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#StressProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#StressProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#StressProbe.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#StressProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#StressProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#StressProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#StressProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#StressProbe.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#StressProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#StressProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#StressProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#StressProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#StressProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#StressProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#StressProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`SnapToMeshNodes`](#StressProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#StressProbe.BeamSelection)                                 | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#StressProbe.BoundaryConditionSelection)       | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`Children`](#StressProbe.Children)                                           | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#StressProbe.Comments)                                           | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#StressProbe.ContactRegionSelection)               | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#StressProbe.CoordinateSystemSelection)         | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#StressProbe.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#StressProbe.DisplayTime)                                     | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#StressProbe.DpfEvaluation)                                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`EquivalentStress`](#StressProbe.EquivalentStress)                           | Gets the EquivalentStress.                                                                                                                                                 |
| [`Figures`](#StressProbe.Figures)                                             | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#StressProbe.GeometryLocation)                           | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#StressProbe.Images)                                               | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#StressProbe.InternalObject)                               | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#StressProbe.IsSolved)                                           | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#StressProbe.IterationNumber)                             | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#StressProbe.LoadStep)                                           | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#StressProbe.LoadStepNumber)                               | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#StressProbe.LocationMethod)                               | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumEquivalentStress`](#StressProbe.MaximumEquivalentStress)             | Gets the MaximumEquivalentStress.                                                                                                                                          |
| [`MaximumMaximumPrincipalStress`](#StressProbe.MaximumMaximumPrincipalStress) | Gets the MaximumMaximumPrincipalStress.                                                                                                                                    |
| [`MaximumMiddlePrincipalStress`](#StressProbe.MaximumMiddlePrincipalStress)   | Gets the MaximumMiddlePrincipalStress.                                                                                                                                     |
| [`MaximumMinimumPrincipalStress`](#StressProbe.MaximumMinimumPrincipalStress) | Gets the MaximumMinimumPrincipalStress.                                                                                                                                    |
| [`MaximumNormalXAxisStress`](#StressProbe.MaximumNormalXAxisStress)           | Gets the MaximumNormalXAxisStress.                                                                                                                                         |
| [`MaximumNormalYAxisStress`](#StressProbe.MaximumNormalYAxisStress)           | Gets the MaximumNormalYAxisStress.                                                                                                                                         |
| [`MaximumNormalZAxisStress`](#StressProbe.MaximumNormalZAxisStress)           | Gets the MaximumNormalZAxisStress.                                                                                                                                         |
| [`MaximumPrincipalStress`](#StressProbe.MaximumPrincipalStress)               | Gets the MaximumPrincipalStress.                                                                                                                                           |
| [`MaximumStressIntensity`](#StressProbe.MaximumStressIntensity)               | Gets the MaximumStressIntensity.                                                                                                                                           |
| [`MaximumTotal`](#StressProbe.MaximumTotal)                                   | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#StressProbe.MaximumXAxis)                                   | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumXYShearStress`](#StressProbe.MaximumXYShearStress)                   | Gets the MaximumXYShearStress.                                                                                                                                             |
| [`MaximumXZShearStress`](#StressProbe.MaximumXZShearStress)                   | Gets the MaximumXZShearStress.                                                                                                                                             |
| [`MaximumYAxis`](#StressProbe.MaximumYAxis)                                   | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumYZShearStress`](#StressProbe.MaximumYZShearStress)                   | Gets the MaximumYZShearStress.                                                                                                                                             |
| [`MaximumZAxis`](#StressProbe.MaximumZAxis)                                   | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#StressProbe.MeshConnectionSelection)             | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MiddlePrincipalStress`](#StressProbe.MiddlePrincipalStress)                 | Gets the MiddlePrincipalStress.                                                                                                                                            |
| [`MinimumEquivalentStress`](#StressProbe.MinimumEquivalentStress)             | Gets the MinimumEquivalentStress.                                                                                                                                          |
| [`MinimumMaximumPrincipalStress`](#StressProbe.MinimumMaximumPrincipalStress) | Gets the MinimumMaximumPrincipalStress.                                                                                                                                    |
| [`MinimumMiddlePrincipalStress`](#StressProbe.MinimumMiddlePrincipalStress)   | Gets the MinimumMiddlePrincipalStress.                                                                                                                                     |
| [`MinimumMinimumPrincipalStress`](#StressProbe.MinimumMinimumPrincipalStress) | Gets the MinimumMinimumPrincipalStress.                                                                                                                                    |
| [`MinimumNormalXAxisStress`](#StressProbe.MinimumNormalXAxisStress)           | Gets the MinimumNormalXAxisStress.                                                                                                                                         |
| [`MinimumNormalYAxisStress`](#StressProbe.MinimumNormalYAxisStress)           | Gets the MinimumNormalYAxisStress.                                                                                                                                         |
| [`MinimumNormalZAxisStress`](#StressProbe.MinimumNormalZAxisStress)           | Gets the MinimumNormalZAxisStress.                                                                                                                                         |
| [`MinimumPrincipalStress`](#StressProbe.MinimumPrincipalStress)               | Gets the MinimumPrincipalStress.                                                                                                                                           |
| [`MinimumStressIntensity`](#StressProbe.MinimumStressIntensity)               | Gets the MinimumStressIntensity.                                                                                                                                           |
| [`MinimumTotal`](#StressProbe.MinimumTotal)                                   | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#StressProbe.MinimumXAxis)                                   | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumXYShearStress`](#StressProbe.MinimumXYShearStress)                   | Gets the MinimumXYShearStress.                                                                                                                                             |
| [`MinimumXZShearStress`](#StressProbe.MinimumXZShearStress)                   | Gets the MinimumXZShearStress.                                                                                                                                             |
| [`MinimumYAxis`](#StressProbe.MinimumYAxis)                                   | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumYZShearStress`](#StressProbe.MinimumYZShearStress)                   | Gets the MinimumYZShearStress.                                                                                                                                             |
| [`MinimumZAxis`](#StressProbe.MinimumZAxis)                                   | Gets the MinimumZAxis.                                                                                                                                                     |
| [`NormalXAxisStress`](#StressProbe.NormalXAxisStress)                         | Gets the NormalXAxisStress.                                                                                                                                                |
| [`NormalYAxisStress`](#StressProbe.NormalYAxisStress)                         | Gets the NormalYAxisStress.                                                                                                                                                |
| [`NormalZAxisStress`](#StressProbe.NormalZAxisStress)                         | Gets the NormalZAxisStress.                                                                                                                                                |
| [`Orientation`](#StressProbe.Orientation)                                     | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#StressProbe.Properties)                                       | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#StressProbe.RPMSelection)                                   | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#StressProbe.RemotePointSelection)                   | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#StressProbe.ResultSelection)                             | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#StressProbe.SpatialResolution)                         | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#StressProbe.SpringSelection)                             | Gets or sets the SpringSelection.                                                                                                                                          |
| [`StressIntensity`](#StressProbe.StressIntensity)                             | Gets the StressIntensity.                                                                                                                                                  |
| [`Substep`](#StressProbe.Substep)                                             | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#StressProbe.Summation)                                         | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#StressProbe.Suppressed)                                       | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#StressProbe.SurfaceSelection)                           | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`Time`](#StressProbe.Time)                                                   | Gets the Time.                                                                                                                                                             |
| [`Total`](#StressProbe.Total)                                                 | Gets the Total.                                                                                                                                                            |
| [`Type`](#StressProbe.Type)                                                   | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#StressProbe.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#StressProbe.XAxis)                                                 | Gets the XAxis.                                                                                                                                                            |
| [`XCoordinate`](#StressProbe.XCoordinate)                                     | Gets the XCoordinate.                                                                                                                                                      |
| [`XYShearStress`](#StressProbe.XYShearStress)                                 | Gets the XYShearStress.                                                                                                                                                    |
| [`XZShearStress`](#StressProbe.XZShearStress)                                 | Gets the XZShearStress.                                                                                                                                                    |
| [`YAxis`](#StressProbe.YAxis)                                                 | Gets the YAxis.                                                                                                                                                            |
| [`YCoordinate`](#StressProbe.YCoordinate)                                     | Gets the YCoordinate.                                                                                                                                                      |
| [`YZShearStress`](#StressProbe.YZShearStress)                                 | Gets the YZShearStress.                                                                                                                                                    |
| [`ZAxis`](#StressProbe.ZAxis)                                                 | Gets the ZAxis.                                                                                                                                                            |
| [`ZCoordinate`](#StressProbe.ZCoordinate)                                     | Gets the ZCoordinate.                                                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="StressProbe.BeamSelection"></a>

### *property* StressProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.BoundaryConditionSelection"></a>

### *property* StressProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Children"></a>

### *property* StressProbe.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Comments"></a>

### *property* StressProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.ContactRegionSelection"></a>

### *property* StressProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.CoordinateSystemSelection"></a>

### *property* StressProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.DataModelObjectCategory"></a>

### *property* StressProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.DisplayTime"></a>

### *property* StressProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.DpfEvaluation"></a>

### *property* StressProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.EquivalentStress"></a>

### *property* StressProbe.EquivalentStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EquivalentStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Figures"></a>

### *property* StressProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.GeometryLocation"></a>

### *property* StressProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Images"></a>

### *property* StressProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.InternalObject"></a>

### *property* StressProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.IsSolved"></a>

### *property* StressProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.IterationNumber"></a>

### *property* StressProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.LoadStep"></a>

### *property* StressProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.LoadStepNumber"></a>

### *property* StressProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.LocationMethod"></a>

### *property* StressProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumEquivalentStress"></a>

### *property* StressProbe.MaximumEquivalentStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumEquivalentStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumMaximumPrincipalStress"></a>

### *property* StressProbe.MaximumMaximumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumMiddlePrincipalStress"></a>

### *property* StressProbe.MaximumMiddlePrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumMinimumPrincipalStress"></a>

### *property* StressProbe.MaximumMinimumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumNormalXAxisStress"></a>

### *property* StressProbe.MaximumNormalXAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalXAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumNormalYAxisStress"></a>

### *property* StressProbe.MaximumNormalYAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalYAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumNormalZAxisStress"></a>

### *property* StressProbe.MaximumNormalZAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalZAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumPrincipalStress"></a>

### *property* StressProbe.MaximumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumStressIntensity"></a>

### *property* StressProbe.MaximumStressIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumStressIntensity.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumTotal"></a>

### *property* StressProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumXAxis"></a>

### *property* StressProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumXYShearStress"></a>

### *property* StressProbe.MaximumXYShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXYShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumXZShearStress"></a>

### *property* StressProbe.MaximumXZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXZShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumYAxis"></a>

### *property* StressProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumYZShearStress"></a>

### *property* StressProbe.MaximumYZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYZShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MaximumZAxis"></a>

### *property* StressProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MeshConnectionSelection"></a>

### *property* StressProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MiddlePrincipalStress"></a>

### *property* StressProbe.MiddlePrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumEquivalentStress"></a>

### *property* StressProbe.MinimumEquivalentStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEquivalentStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumMaximumPrincipalStress"></a>

### *property* StressProbe.MinimumMaximumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumMiddlePrincipalStress"></a>

### *property* StressProbe.MinimumMiddlePrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumMinimumPrincipalStress"></a>

### *property* StressProbe.MinimumMinimumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumNormalXAxisStress"></a>

### *property* StressProbe.MinimumNormalXAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalXAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumNormalYAxisStress"></a>

### *property* StressProbe.MinimumNormalYAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalYAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumNormalZAxisStress"></a>

### *property* StressProbe.MinimumNormalZAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalZAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumPrincipalStress"></a>

### *property* StressProbe.MinimumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumStressIntensity"></a>

### *property* StressProbe.MinimumStressIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStressIntensity.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumTotal"></a>

### *property* StressProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumXAxis"></a>

### *property* StressProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumXYShearStress"></a>

### *property* StressProbe.MinimumXYShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXYShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumXZShearStress"></a>

### *property* StressProbe.MinimumXZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXZShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumYAxis"></a>

### *property* StressProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumYZShearStress"></a>

### *property* StressProbe.MinimumYZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYZShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.MinimumZAxis"></a>

### *property* StressProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.NormalXAxisStress"></a>

### *property* StressProbe.NormalXAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalXAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.NormalYAxisStress"></a>

### *property* StressProbe.NormalYAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalYAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.NormalZAxisStress"></a>

### *property* StressProbe.NormalZAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalZAxisStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Orientation"></a>

### *property* StressProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Properties"></a>

### *property* StressProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.RPMSelection"></a>

### *property* StressProbe.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.RemotePointSelection"></a>

### *property* StressProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.ResultSelection"></a>

### *property* StressProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.SpatialResolution"></a>

### *property* StressProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.SpringSelection"></a>

### *property* StressProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.StressIntensity"></a>

### *property* StressProbe.StressIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StressIntensity.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Substep"></a>

### *property* StressProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Summation"></a>

### *property* StressProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Suppressed"></a>

### *property* StressProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.SurfaceSelection"></a>

### *property* StressProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Time"></a>

### *property* StressProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Total"></a>

### *property* StressProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Type"></a>

### *property* StressProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.VisibleProperties"></a>

### *property* StressProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.XAxis"></a>

### *property* StressProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.XCoordinate"></a>

### *property* StressProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.XYShearStress"></a>

### *property* StressProbe.XYShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XYShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.XZShearStress"></a>

### *property* StressProbe.XZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XZShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.YAxis"></a>

### *property* StressProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.YCoordinate"></a>

### *property* StressProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.YZShearStress"></a>

### *property* StressProbe.YZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YZShearStress.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.ZAxis"></a>

### *property* StressProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.ZCoordinate"></a>

### *property* StressProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressProbe.Activate"></a>

### StressProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.AddComment"></a>

### StressProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.AddFigure"></a>

### StressProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.AddImage"></a>

### StressProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.ClearGeneratedData"></a>

### StressProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.CopyTo"></a>

### StressProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.CreateParameter"></a>

### StressProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Delete"></a>

### StressProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.Duplicate"></a>

### StressProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.DuplicateWithoutResults"></a>

### StressProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.EvaluateAllResults"></a>

### StressProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.ExportAnimation"></a>

### StressProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.GetChildren"></a>

### StressProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.GetParameter"></a>

### StressProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.GroupAllSimilarChildren"></a>

### StressProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.GroupSimilarObjects"></a>

### StressProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.PropertyByAPIName"></a>

### StressProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.PropertyByName"></a>

### StressProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.RemoveParameter"></a>

### StressProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.RenameBasedOnDefinition"></a>

### StressProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StressProbe.SnapToMeshNodes"></a>

### StressProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

