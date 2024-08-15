# `StressProbe`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StressProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a StressProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `ExportAnimation`         | Run the ExportAnimation action.                                                   |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                |
| `DuplicateWithoutResults` | Run the DuplicateWithoutResults action.                                           |
| `EvaluateAllResults`      | Run the EvaluateAllResults action.                                                |
| `SnapToMeshNodes`         | Snap the coordinates of probe result to the mesh nodes.                           |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `InternalObject`                | Gets the internal object. For advanced usage only.                                                                                                                         |
| `EquivalentStress`              | Gets the EquivalentStress.                                                                                                                                                 |
| `XCoordinate`                   | Gets the XCoordinate.                                                                                                                                                      |
| `YCoordinate`                   | Gets the YCoordinate.                                                                                                                                                      |
| `ZCoordinate`                   | Gets the ZCoordinate.                                                                                                                                                      |
| `MaximumEquivalentStress`       | Gets the MaximumEquivalentStress.                                                                                                                                          |
| `MaximumMaximumPrincipalStress` | Gets the MaximumMaximumPrincipalStress.                                                                                                                                    |
| `MaximumMiddlePrincipalStress`  | Gets the MaximumMiddlePrincipalStress.                                                                                                                                     |
| `MaximumMinimumPrincipalStress` | Gets the MaximumMinimumPrincipalStress.                                                                                                                                    |
| `MaximumNormalXAxisStress`      | Gets the MaximumNormalXAxisStress.                                                                                                                                         |
| `MaximumNormalYAxisStress`      | Gets the MaximumNormalYAxisStress.                                                                                                                                         |
| `MaximumNormalZAxisStress`      | Gets the MaximumNormalZAxisStress.                                                                                                                                         |
| `MaximumPrincipalStress`        | Gets the MaximumPrincipalStress.                                                                                                                                           |
| `MaximumXYShearStress`          | Gets the MaximumXYShearStress.                                                                                                                                             |
| `MaximumXZShearStress`          | Gets the MaximumXZShearStress.                                                                                                                                             |
| `MaximumYZShearStress`          | Gets the MaximumYZShearStress.                                                                                                                                             |
| `MaximumStressIntensity`        | Gets the MaximumStressIntensity.                                                                                                                                           |
| `MiddlePrincipalStress`         | Gets the MiddlePrincipalStress.                                                                                                                                            |
| `MinimumEquivalentStress`       | Gets the MinimumEquivalentStress.                                                                                                                                          |
| `MinimumMaximumPrincipalStress` | Gets the MinimumMaximumPrincipalStress.                                                                                                                                    |
| `MinimumMiddlePrincipalStress`  | Gets the MinimumMiddlePrincipalStress.                                                                                                                                     |
| `MinimumMinimumPrincipalStress` | Gets the MinimumMinimumPrincipalStress.                                                                                                                                    |
| `MinimumNormalXAxisStress`      | Gets the MinimumNormalXAxisStress.                                                                                                                                         |
| `MinimumNormalYAxisStress`      | Gets the MinimumNormalYAxisStress.                                                                                                                                         |
| `MinimumNormalZAxisStress`      | Gets the MinimumNormalZAxisStress.                                                                                                                                         |
| `MinimumPrincipalStress`        | Gets the MinimumPrincipalStress.                                                                                                                                           |
| `MinimumXYShearStress`          | Gets the MinimumXYShearStress.                                                                                                                                             |
| `MinimumXZShearStress`          | Gets the MinimumXZShearStress.                                                                                                                                             |
| `MinimumYZShearStress`          | Gets the MinimumYZShearStress.                                                                                                                                             |
| `MinimumStressIntensity`        | Gets the MinimumStressIntensity.                                                                                                                                           |
| `NormalXAxisStress`             | Gets the NormalXAxisStress.                                                                                                                                                |
| `NormalYAxisStress`             | Gets the NormalYAxisStress.                                                                                                                                                |
| `NormalZAxisStress`             | Gets the NormalZAxisStress.                                                                                                                                                |
| `XYShearStress`                 | Gets the XYShearStress.                                                                                                                                                    |
| `XZShearStress`                 | Gets the XZShearStress.                                                                                                                                                    |
| `YZShearStress`                 | Gets the YZShearStress.                                                                                                                                                    |
| `StressIntensity`               | Gets the StressIntensity.                                                                                                                                                  |
| `DataModelObjectCategory`       | Gets the current DataModelObject's category.                                                                                                                               |
| `Summation`                     | Gets or sets the Summation.                                                                                                                                                |
| `LocationMethod`                | Gets or sets the LocationMethod.                                                                                                                                           |
| `GeometryLocation`              | Gets or sets the GeometryLocation.                                                                                                                                         |
| `CoordinateSystemSelection`     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| `BoundaryConditionSelection`    | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| `ContactRegionSelection`        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| `RemotePointSelection`          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| `BeamSelection`                 | Gets or sets the BeamSelection.                                                                                                                                            |
| `MeshConnectionSelection`       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| `SurfaceSelection`              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| `SpringSelection`               | Gets or sets the SpringSelection.                                                                                                                                          |
| `IsSolved`                      | Gets the IsSolved.                                                                                                                                                         |
| `Orientation`                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| `IterationNumber`               | Gets the IterationNumber.                                                                                                                                                  |
| `LoadStep`                      | Gets the LoadStep.                                                                                                                                                         |
| `LoadStepNumber`                | Gets or sets the LoadStepNumber.                                                                                                                                           |
| `Substep`                       | Gets the Substep.                                                                                                                                                          |
| `DisplayTime`                   | Gets or sets the DisplayTime.                                                                                                                                              |
| `MaximumTotal`                  | Gets the MaximumTotal.                                                                                                                                                     |
| `MaximumXAxis`                  | Gets the MaximumXAxis.                                                                                                                                                     |
| `MaximumYAxis`                  | Gets the MaximumYAxis.                                                                                                                                                     |
| `MaximumZAxis`                  | Gets the MaximumZAxis.                                                                                                                                                     |
| `MinimumTotal`                  | Gets the MinimumTotal.                                                                                                                                                     |
| `MinimumXAxis`                  | Gets the MinimumXAxis.                                                                                                                                                     |
| `MinimumYAxis`                  | Gets the MinimumYAxis.                                                                                                                                                     |
| `MinimumZAxis`                  | Gets the MinimumZAxis.                                                                                                                                                     |
| `Time`                          | Gets the Time.                                                                                                                                                             |
| `Total`                         | Gets the Total.                                                                                                                                                            |
| `XAxis`                         | Gets the XAxis.                                                                                                                                                            |
| `YAxis`                         | Gets the YAxis.                                                                                                                                                            |
| `ZAxis`                         | Gets the ZAxis.                                                                                                                                                            |
| `ResultSelection`               | Gets or sets the ResultSelection.                                                                                                                                          |
| `SpatialResolution`             | Gets or sets the SpatialResolution.                                                                                                                                        |
| `Type`                          | Gets the Type.                                                                                                                                                             |
| `DpfEvaluation`                 | Gets or sets the DpfEvaluation.                                                                                                                                            |
| `Suppressed`                    | Gets or sets the Suppressed.                                                                                                                                               |
| `Children`                      | Gets the list of children.                                                                                                                                                 |
| `Comments`                      | Gets the list of associated comments.                                                                                                                                      |
| `Figures`                       | Gets the list of associated figures.                                                                                                                                       |
| `Images`                        | Gets the list of associated images.                                                                                                                                        |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                                                                                                         |
| `Properties`                    | Gets the list of properties for this object.                                                                                                                               |
| `VisibleProperties`             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

### *property* StressProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.EquivalentStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EquivalentStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumEquivalentStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumEquivalentStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumMaximumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumMiddlePrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumMinimumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumNormalXAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalXAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumNormalYAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalYAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumNormalZAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumNormalZAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumXYShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXYShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumXZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXZShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumYZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYZShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumStressIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumStressIntensity.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MiddlePrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumEquivalentStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumEquivalentStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumMaximumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumMiddlePrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumMinimumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumNormalXAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalXAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumNormalYAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalYAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumNormalZAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumNormalZAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumPrincipalStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumXYShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXYShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumXZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXZShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumYZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYZShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumStressIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStressIntensity.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.NormalXAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalXAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.NormalYAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalYAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.NormalZAxisStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NormalZAxisStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.XYShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XYShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.XZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XZShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.YZShearStress *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YZShearStress.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.StressIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StressIntensity.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* StressProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### StressProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### StressProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### StressProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### StressProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### StressProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### StressProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### StressProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### StressProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StressProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### StressProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### StressProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### StressProbe.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### StressProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### StressProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### StressProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### StressProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### StressProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### StressProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### StressProbe.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### StressProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### StressProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### StressProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

