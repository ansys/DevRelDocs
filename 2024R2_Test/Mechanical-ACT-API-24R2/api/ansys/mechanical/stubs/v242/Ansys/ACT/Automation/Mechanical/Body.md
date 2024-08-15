# `Body`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Body

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Body.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GetGeoBody`              | Gets the Geo Body                                                                 |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                |
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
| `AddPythonCodeEventBased` | Creates a new PythonCodeEventBased                                                |
| `GenerateMesh`            | Run the GenerateMesh action.                                                      |
| `PreviewInflation`        | Run the PreviewInflation action.                                                  |
| `PreviewSurfaceMesh`      | Run the PreviewSurfaceMesh action.                                                |
| `ShowBody`                | Run the ShowBody action.                                                          |
| `Update`                  | Run the Update action.                                                            |
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
|---------------------------------|------------------------------------------------------------------------------------------------|
| `Hidden`                        | Hide or show the body.                                                                         |
| `ConfigurationId`               | Gets the related Result Mesh's ConfigurationId.                                                |
| `ResultMeshId`                  | Gets the related Result Mesh's ObjectId.                                                       |
| `ReferenceTemperature`          | Gets or sets the ReferenceTemperature.                                                         |
| `ThicknessMode`                 | Gets the ThicknessMode.                                                                        |
| `Dimension`                     | Gets or sets the Dimension.                                                                    |
| `Assignment`                    | Gets or sets the Assignment.                                                                   |
| `CrossSectionName`              | Gets CrossSectionName.                                                                         |
| `ModelType`                     | Gets or sets the ModelType.                                                                    |
| `GeometryType`                  | Gets the GeometryType.                                                                         |
| `SuppressedParameterized`       | Gets if the part suppressed property is parameterized.                                         |
| `Transparency`                  | Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible). |
| `Color`                         | Gets or sets the Color, encoded as a BGR bitfield.                                             |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                             |
| `Elements`                      | Gets the Elements.                                                                             |
| `Material`                      | Gets or sets the Material.                                                                     |
| `Nodes`                         | Gets the Nodes.                                                                                |
| `NumberOfTurns`                 | Gets or sets the NumberOfTurns.                                                                |
| `MeshVersion`                   | Gets the MeshVersion.                                                                          |
| `LengthX`                       | Gets the LengthX.                                                                              |
| `LengthY`                       | Gets the LengthY.                                                                              |
| `LengthZ`                       | Gets the LengthZ.                                                                              |
| `CrossSectionArea`              | Gets the CrossSectionArea.                                                                     |
| `CrossSectionIYY`               | Gets the CrossSectionIYY.                                                                      |
| `CrossSectionIZZ`               | Gets the CrossSectionIZZ.                                                                      |
| `FiberAngle`                    | Gets or sets the FiberAngle.                                                                   |
| `FiberCrossSectionArea`         | Gets or sets the FiberCrossSectionArea.                                                        |
| `FiberSpacing`                  | Gets or sets the FiberSpacing.                                                                 |
| `FluidCrossArea`                | Gets or sets the FluidCrossArea.                                                               |
| `Mass`                          | Gets the Mass.                                                                                 |
| `CentroidX`                     | Gets the CentroidX.                                                                            |
| `CentroidY`                     | Gets the CentroidY.                                                                            |
| `CentroidZ`                     | Gets the CentroidZ.                                                                            |
| `MomentOfInertiaIp1`            | Gets the MomentOfInertiaIp1.                                                                   |
| `MomentOfInertiaIp2`            | Gets the MomentOfInertiaIp2.                                                                   |
| `MomentOfInertiaIp3`            | Gets the MomentOfInertiaIp3.                                                                   |
| `Average`                       | Gets the Average.                                                                              |
| `Maximum`                       | Gets the Maximum.                                                                              |
| `Minimum`                       | Gets the Minimum.                                                                              |
| `StandardDeviation`             | Gets the StandardDeviation.                                                                    |
| `OffsetX`                       | Gets or sets the OffsetX.                                                                      |
| `OffsetY`                       | Gets or sets the OffsetY.                                                                      |
| `PipeExternalDiameter`          | Gets the PipeExternalDiameter.                                                                 |
| `PipeInternalDiameter`          | Gets the PipeInternalDiameter.                                                                 |
| `PipeThickness`                 | Gets the PipeThickness.                                                                        |
| `ReferenceTemperatureValue`     | Gets or sets the ReferenceTemperatureValue.                                                    |
| `SurfaceArea`                   | Gets the SurfaceArea.                                                                          |
| `Thickness`                     | Gets or sets the Thickness.                                                                    |
| `Volume`                        | Gets the Volume.                                                                               |
| `Length`                        | Gets the Length.                                                                               |
| `OffsetMode`                    | Gets or sets the OffsetMode.                                                                   |
| `BrickIntegrationScheme`        | Gets or sets the BrickIntegrationScheme.                                                       |
| `FluidDiscretization`           | Gets or sets the FluidDiscretization.                                                          |
| `LinkTrussBehavior`             | Gets or sets the LinkTrussBehavior.                                                            |
| `MaterialPolarizationDirection` | Gets or sets the MaterialPolarizationDirection.                                                |
| `MeshMetric`                    | Gets the MeshMetric.                                                                           |
| `Behavior`                      | Gets or sets the Behavior.                                                                     |
| `OffsetType`                    | Gets or sets the OffsetType.                                                                   |
| `FluidSolidPhase`               | Gets or sets the FluidSolidPhase.                                                              |
| `ReferenceFrame`                | Gets or sets the ReferenceFrame.                                                               |
| `ReinforcingStressState`        | Gets or sets the ReinforcingStressState.                                                       |
| `StiffnessOption`               | Gets or sets the StiffnessOption.                                                              |
| `ShellOffsetType`               | Gets or sets the ShellOffsetType.                                                              |
| `StiffnessBehavior`             | Gets or sets the StiffnessBehavior.                                                            |
| `Treatment`                     | Gets or sets the Treatment.                                                                    |
| `Visible`                       | Gets or sets the Visible.                                                                      |
| `HomogeneousMembrane`           | Gets or sets the HomogeneousMembrane.                                                          |
| `IsWindingBody`                 | Gets the IsWindingBody.                                                                        |
| `NonlinearEffects`              | Gets or sets the NonlinearEffects.                                                             |
| `Suppressed`                    | Gets or sets the Suppressed.                                                                   |
| `ThermalStrainEffects`          | Gets or sets the ThermalStrainEffects.                                                         |
| `ManualThicknessMode`           | Gets the ManualThicknessMode.                                                                  |
| `UseReferenceTemperatureByBody` | Gets or sets the UseReferenceTemperatureByBody.                                                |
| `UserNameChange`                | Gets the UserNameChange.                                                                       |
| `BeamSection`                   | Gets the BeamSection.                                                                          |
| `CoordinateSystem`              | Gets or sets the CoordinateSystem.                                                             |
| `CrossSectionSelection`         | Gets or sets the CrossSectionSelection.                                                        |
| `DataModelObjectCategory`       | Gets the current DataModelObject's category.                                                   |
| `Children`                      | Gets the list of children.                                                                     |
| `Comments`                      | Gets the list of associated comments.                                                          |
| `Figures`                       | Gets the list of associated figures.                                                           |
| `Images`                        | Gets the list of associated images.                                                            |
| `ReadOnly`                      | Gets or sets the ReadOnly.                                                                     |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                             |
| `Properties`                    | Gets the list of properties for this object.                                                   |
| `VisibleProperties`             | Gets the list of properties that are visible for this object.                                  |

<a id="property-detail"></a>

## Property detail

### *property* Body.Hidden *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Hide or show the body.

<!-- !! processed by numpydoc !! -->

### *property* Body.ConfigurationId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh's ConfigurationId.

<!-- !! processed by numpydoc !! -->

### *property* Body.ResultMeshId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the related Result Mesh's ObjectId.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReferenceTemperature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

### *property* Body.ThicknessMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ThicknessMode.

<!-- !! processed by numpydoc !! -->

### *property* Body.Dimension *: [Ansys.Mechanical.DataModel.Enums.ShellBodyDimension](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellBodyDimension.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellBodyDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Dimension.

<!-- !! processed by numpydoc !! -->

### *property* Body.Assignment *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Assignment.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets CrossSectionName.

<!-- !! processed by numpydoc !! -->

### *property* Body.ModelType *: [Ansys.Mechanical.DataModel.Enums.PrototypeModelType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PrototypeModelType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PrototypeModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.
Note: ModelType is applicable to line bodies and surface bodies only.

<!-- !! processed by numpydoc !! -->

### *property* Body.GeometryType *: [Ansys.Mechanical.DataModel.Enums.GeometryType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometryType.

<!-- !! processed by numpydoc !! -->

### *property* Body.SuppressedParameterized *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets if the part suppressed property is parameterized.

<!-- !! processed by numpydoc !! -->

### *property* Body.Transparency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Transparency. Values range from 0.0 (fully invisible) to 1.0 (fully visible).

<!-- !! processed by numpydoc !! -->

### *property* Body.Color *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color, encoded as a BGR bitfield.

<!-- !! processed by numpydoc !! -->

### *property* Body.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPrototypeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Body.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elements.

<!-- !! processed by numpydoc !! -->

### *property* Body.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* Body.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Body.NumberOfTurns *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfTurns.

<!-- !! processed by numpydoc !! -->

### *property* Body.MeshVersion *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshVersion.

<!-- !! processed by numpydoc !! -->

### *property* Body.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* Body.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* Body.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionIYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIYY.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionIZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrossSectionIZZ.

<!-- !! processed by numpydoc !! -->

### *property* Body.FiberAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberAngle.

<!-- !! processed by numpydoc !! -->

### *property* Body.FiberCrossSectionArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberCrossSectionArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.FiberSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FiberSpacing.

<!-- !! processed by numpydoc !! -->

### *property* Body.FluidCrossArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidCrossArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.Mass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mass.

<!-- !! processed by numpydoc !! -->

### *property* Body.CentroidX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidX.

<!-- !! processed by numpydoc !! -->

### *property* Body.CentroidY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidY.

<!-- !! processed by numpydoc !! -->

### *property* Body.CentroidZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CentroidZ.

<!-- !! processed by numpydoc !! -->

### *property* Body.MomentOfInertiaIp1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp1.

<!-- !! processed by numpydoc !! -->

### *property* Body.MomentOfInertiaIp2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp2.

<!-- !! processed by numpydoc !! -->

### *property* Body.MomentOfInertiaIp3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentOfInertiaIp3.

<!-- !! processed by numpydoc !! -->

### *property* Body.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

### *property* Body.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* Body.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* Body.StandardDeviation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StandardDeviation.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetX.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetY.

<!-- !! processed by numpydoc !! -->

### *property* Body.PipeExternalDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeExternalDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Body.PipeInternalDiameter *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeInternalDiameter.

<!-- !! processed by numpydoc !! -->

### *property* Body.PipeThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PipeThickness.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReferenceTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperatureValue.

<!-- !! processed by numpydoc !! -->

### *property* Body.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

### *property* Body.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

### *property* Body.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Volume.

<!-- !! processed by numpydoc !! -->

### *property* Body.Length *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Length.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetMode.

<!-- !! processed by numpydoc !! -->

### *property* Body.BrickIntegrationScheme *: [Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme](../../../../../v241/Ansys/Mechanical/DataModel/Enums/BrickIntegrationScheme.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BrickIntegrationScheme) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BrickIntegrationScheme.

<!-- !! processed by numpydoc !! -->

### *property* Body.FluidDiscretization *: [Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/FluidDiscretizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FluidDiscretizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidDiscretization.

<!-- !! processed by numpydoc !! -->

### *property* Body.LinkTrussBehavior *: [Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PrototypeLinkBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PrototypeLinkBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinkTrussBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Body.MaterialPolarizationDirection *: [Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MaterialPolarizationDirection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MaterialPolarizationDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPolarizationDirection.

<!-- !! processed by numpydoc !! -->

### *property* Body.MeshMetric *: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshMetricType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MeshMetric.

<!-- !! processed by numpydoc !! -->

### *property* Body.Behavior *: [Ansys.Mechanical.DataModel.Enums.Model2DBehavior](../../../../../v241/Ansys/Mechanical/DataModel/Enums/Model2DBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Model2DBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* Body.OffsetType *: [Ansys.Mechanical.DataModel.Enums.BeamOffsetType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/BeamOffsetType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BeamOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

### *property* Body.FluidSolidPhase *: [Ansys.Mechanical.DataModel.Enums.PhaseType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PhaseType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PhaseType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidSolidPhase.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReferenceFrame *: [Ansys.Mechanical.DataModel.Enums.ReferenceFrameType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ReferenceFrameType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ReferenceFrameType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceFrame.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReinforcingStressState *: [Ansys.Mechanical.DataModel.Enums.ReinforcingStressState](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ReinforcingStressState.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ReinforcingStressState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReinforcingStressState.

<!-- !! processed by numpydoc !! -->

### *property* Body.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessOption.

<!-- !! processed by numpydoc !! -->

### *property* Body.ShellOffsetType *: [Ansys.Mechanical.DataModel.Enums.ShellOffsetType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellOffsetType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellOffsetType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellOffsetType.

<!-- !! processed by numpydoc !! -->

### *property* Body.StiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.StiffnessBehavior](../../../../../v241/Ansys/Mechanical/DataModel/Enums/StiffnessBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessBehavior.

<!-- !! processed by numpydoc !! -->

### *property* Body.Treatment *: [Ansys.Mechanical.DataModel.Enums.BodyTreatment](../../../../../v241/Ansys/Mechanical/DataModel/Enums/BodyTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BodyTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Treatment.

<!-- !! processed by numpydoc !! -->

### *property* Body.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* Body.HomogeneousMembrane *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HomogeneousMembrane.

<!-- !! processed by numpydoc !! -->

### *property* Body.IsWindingBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsWindingBody.

<!-- !! processed by numpydoc !! -->

### *property* Body.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

### *property* Body.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Body.ThermalStrainEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainEffects.

<!-- !! processed by numpydoc !! -->

### *property* Body.ManualThicknessMode *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ManualThicknessMode.

<!-- !! processed by numpydoc !! -->

### *property* Body.UseReferenceTemperatureByBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseReferenceTemperatureByBody.

<!-- !! processed by numpydoc !! -->

### *property* Body.UserNameChange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UserNameChange.

<!-- !! processed by numpydoc !! -->

### *property* Body.BeamSection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the BeamSection.

<!-- !! processed by numpydoc !! -->

### *property* Body.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Body.CrossSectionSelection *: [Ansys.ACT.Automation.Mechanical.CrossSection](../../../../../v241/Ansys/ACT/Automation/Mechanical/CrossSection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CrossSection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrossSectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* Body.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Body.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Body.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Body.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Body.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Body.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Body.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Body.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Body.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Body.GetGeoBody()

Gets the Geo Body

<!-- !! processed by numpydoc !! -->

### Body.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Body.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Body.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

### Body.GenerateMesh()

Run the GenerateMesh action.

<!-- !! processed by numpydoc !! -->

### Body.PreviewInflation()

Run the PreviewInflation action.

<!-- !! processed by numpydoc !! -->

### Body.PreviewSurfaceMesh()

Run the PreviewSurfaceMesh action.

<!-- !! processed by numpydoc !! -->

### Body.ShowBody()

Run the ShowBody action.

<!-- !! processed by numpydoc !! -->

### Body.Update()

Run the Update action.

<!-- !! processed by numpydoc !! -->

### Body.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Body.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Body.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Body.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Body.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Body.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Body.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Body.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Body.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Body.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Body.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Body.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Body.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Body.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Body.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

