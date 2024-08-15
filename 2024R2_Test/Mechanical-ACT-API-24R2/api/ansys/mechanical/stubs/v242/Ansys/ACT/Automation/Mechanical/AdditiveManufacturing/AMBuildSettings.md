# `AMBuildSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMBuildSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `SaveBuildSettings`       | Run the SaveBuildSettings action.                                                 |
| `LoadBuildSettings`       | Run the LoadBuildSettings action.                                                 |
| `ResetToDefault`          | ResetToDefault - Restores default values of all properties.                       |
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
|---------------------------------------|------------------------------------------------------------------------------------------------|
| `LayerHeightType`                     | LayerHeightType - Get/Sets the layer height type.                                              |
| `ThermalStrainMaterialModel`          | Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods. |
| `InternalObject`                      | Gets the internal object. For advanced usage only.                                             |
| `Absorptivity`                        | Gets or sets the Absorptivity.                                                                 |
| `ASCParallel`                         | Gets or sets the ASCParallel.                                                                  |
| `ASCPerpendicular`                    | Gets or sets the ASCPerpendicular.                                                             |
| `ASCVertical`                         | Gets or sets the ASCVertical.                                                                  |
| `BeamDiameter`                        | Gets or sets the BeamDiameter.                                                                 |
| `BeamPower`                           | Gets or sets the BeamPower.                                                                    |
| `PowderPropertyFactor`                | Gets or sets the PowderPropertyFactor.                                                         |
| `DwellTimeMultiple`                   | Gets or sets the DwellTimeMultiple.                                                            |
| `GeneratedLayerRotationAngle`         | Gets or sets the GeneratedLayerRotationAngle.                                                  |
| `GeneratedStartLayerAngle`            | Gets or sets the GeneratedStartLayerAngle.                                                     |
| `NumberOfHeatSources`                 | Gets or sets the NumberOfHeatSources.                                                          |
| `ScanPatternBuildFilePath`            | Gets or sets the ScanPatternBuildFilePath.                                                     |
| `ScanStripeWidth`                     | Gets or sets the ScanStripeWidth.                                                              |
| `StrainScalingFactor`                 | Gets or sets the StrainScalingFactor.                                                          |
| `StrainScalingFactorX`                | Gets or sets the StrainScalingFactorX.                                                         |
| `StrainScalingFactorY`                | Gets or sets the StrainScalingFactorY.                                                         |
| `StrainScalingFactorZ`                | Gets or sets the StrainScalingFactorZ.                                                         |
| `ThermalStrainScalingFactor`          | Gets or sets the ThermalStrainScalingFactor.                                                   |
| `BuildGasConvectionCoefficient`       | Gets or sets the BuildGasConvectionCoefficient.                                                |
| `BuildGasTemperature`                 | Gets or sets the BuildGasTemperature.                                                          |
| `BuildPowderConvectionCoefficient`    | Gets or sets the BuildPowderConvectionCoefficient.                                             |
| `BuildPowderTemperature`              | Gets or sets the BuildPowderTemperature.                                                       |
| `CooldownGasConvectionCoefficient`    | Gets or sets the CooldownGasConvectionCoefficient.                                             |
| `CooldownGasTemperature`              | Gets or sets the CooldownGasTemperature.                                                       |
| `CooldownPowderConvectionCoefficient` | Gets or sets the CooldownPowderConvectionCoefficient.                                          |
| `CooldownPowderTemperature`           | Gets or sets the CooldownPowderTemperature.                                                    |
| `DepositionThickness`                 | Gets or sets the DepositionThickness.                                                          |
| `DwellTime`                           | Gets or sets the DwellTime.                                                                    |
| `HatchSpacing`                        | Gets or sets the HatchSpacing.                                                                 |
| `LayerHeightValue`                    | Gets or sets the LayerHeightValue.                                                             |
| `PreheatTemperature`                  | Gets or sets the PreheatTemperature.                                                           |
| `RoomTemperature`                     | Gets or sets the RoomTemperature.                                                              |
| `ScanSpeed`                           | Gets or sets the ScanSpeed.                                                                    |
| `BuildGasOrPowderTemperatureType`     | Gets or sets the BuildGasOrPowderTemperatureType.                                              |
| `BuildMachineType`                    | Gets or sets the BuildMachineType.                                                             |
| `CooldownGasOrPowderTemperatureType`  | Gets or sets the CooldownGasOrPowderTemperatureType.                                           |
| `HeatingDuration`                     | Gets or sets the HeatingDuration.                                                              |
| `HeatingMethod`                       | Gets or sets the HeatingMethod.                                                                |
| `InherentStrainDefinition`            | Gets or sets the InherentStrainDefinition.                                                     |
| `MachineLearningModel`                | Gets or sets the MachineLearningModel.                                                         |
| `AdditiveProcess`                     | Gets or sets the AdditiveProcess.                                                              |
| `ScanPatternDefinition`               | Gets or sets the ScanPatternDefinition.                                                        |
| `ThermalStrainMethod`                 | Gets or sets the ThermalStrainMethod.                                                          |
| `InherentStrain`                      | Gets or sets the InherentStrain.                                                               |
| `DataModelObjectCategory`             | Gets the current DataModelObject's category.                                                   |
| `Children`                            | Gets the list of children.                                                                     |
| `Comments`                            | Gets the list of associated comments.                                                          |
| `Figures`                             | Gets the list of associated figures.                                                           |
| `Images`                              | Gets the list of associated images.                                                            |
| `InternalObject`                      | Gets the internal object. For advanced usage only.                                             |
| `Properties`                          | Gets the list of properties for this object.                                                   |
| `VisibleProperties`                   | Gets the list of properties that are visible for this object.                                  |

<a id="property-detail"></a>

## Property detail

### *property* AMBuildSettings.LayerHeightType *: [Ansys.Mechanical.DataModel.Enums.AMLayerHeightType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMLayerHeightType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMLayerHeightType) | [None](https://docs.python.org/3/library/constants.html#None)*

LayerHeightType - Get/Sets the layer height type.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ThermalStrainMaterialModel *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMThermalStrainMaterialModel.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.Absorptivity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Absorptivity.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ASCParallel *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCParallel.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ASCPerpendicular *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCPerpendicular.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ASCVertical *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCVertical.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BeamDiameter *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamDiameter.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BeamPower *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamPower.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.PowderPropertyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PowderPropertyFactor.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.DwellTimeMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DwellTimeMultiple.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.GeneratedLayerRotationAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratedLayerRotationAngle.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.GeneratedStartLayerAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratedStartLayerAngle.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.NumberOfHeatSources *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfHeatSources.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ScanPatternBuildFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanPatternBuildFilePath.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ScanStripeWidth *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanStripeWidth.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.StrainScalingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactor.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.StrainScalingFactorX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorX.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.StrainScalingFactorY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorY.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.StrainScalingFactorZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorZ.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ThermalStrainScalingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainScalingFactor.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BuildGasConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BuildGasTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasTemperature.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BuildPowderConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BuildPowderTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildPowderTemperature.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.CooldownGasConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.CooldownGasTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasTemperature.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.CooldownPowderConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.CooldownPowderTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownPowderTemperature.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.DepositionThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DepositionThickness.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.DwellTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DwellTime.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.HatchSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HatchSpacing.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.LayerHeightValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeightValue.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.PreheatTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreheatTemperature.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.RoomTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RoomTemperature.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ScanSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanSpeed.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BuildGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMProcessSettingsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.BuildMachineType *: [Ansys.Mechanical.DataModel.Enums.AMBuildMachineType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMBuildMachineType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMBuildMachineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildMachineType.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.CooldownGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMProcessSettingsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.HeatingDuration *: [Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMHeatingDurationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatingDuration.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.HeatingMethod *: [Ansys.Mechanical.DataModel.Enums.AMHeatingMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMHeatingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMHeatingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatingMethod.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.InherentStrainDefinition *: [Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMInherentStrainDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InherentStrainDefinition.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.MachineLearningModel *: [Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMMachineLearningModel.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MachineLearningModel.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.AdditiveProcess *: [Ansys.Mechanical.DataModel.Enums.AMProcessType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMProcessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AdditiveProcess.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ScanPatternDefinition *: [Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMScanPatternDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanPatternDefinition.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.ThermalStrainMethod *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMThermalStrainMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainMethod.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.InherentStrain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InherentStrain.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AMBuildSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### AMBuildSettings.SaveBuildSettings(fName: System.String)

Run the SaveBuildSettings action.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.LoadBuildSettings(fName: System.String)

Run the LoadBuildSettings action.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.ResetToDefault()

ResetToDefault - Restores default values of all properties.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AMBuildSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

