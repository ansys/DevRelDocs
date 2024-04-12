<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing"></a>

<a id="the-additivemanufacturing-package"></a>

# The `AdditiveManufacturing` package

<a id="summary"></a>

## Summary

### Interfaces

| [`IAMProcessStep`](IAMProcessStep.md#IAMProcessStep)   | IAMProcessStep interface.   |
|--------------------------------------------------------|-----------------------------|

### Classes

| [`AMBuildSettings`](AMBuildSettings.md#AMBuildSettings)                            | Defines a AMBuildSettings.      |
|------------------------------------------------------------------------------------|---------------------------------|
| [`SupportRemoval`](SupportRemoval.md#SupportRemoval)                               | SupportRemoval class.           |
| [`BaseRemoval`](BaseRemoval.md#BaseRemoval)                                        | BaseRemoval class.              |
| [`BaseUnboltStep`](BaseUnboltStep.md#BaseUnboltStep)                               | BaseUnboltStep class.           |
| [`UserStep`](UserStep.md#UserStep)                                                 | UserStep class.                 |
| [`BuildStep`](BuildStep.md#BuildStep)                                              | BuildStep class.                |
| [`HeatTreatmentStep`](HeatTreatmentStep.md#HeatTreatmentStep)                      | HeatTreatmentStep class.        |
| [`CooldownStep`](CooldownStep.md#CooldownStep)                                     | CooldownStep class.             |
| [`AMSupportRemovalSequence`](AMSupportRemovalSequence.md#AMSupportRemovalSequence) | AMSupportRemovalSequence class. |
| [`AMProcess`](AMProcess.md#AMProcess)                                              | Defines a AMProcess.            |
| [`AMSupportGroup`](AMSupportGroup.md#AMSupportGroup)                               | Defines a AMSupportGroup.       |
| [`GeneratedAMSupport`](GeneratedAMSupport.md#GeneratedAMSupport)                   | Defines a GeneratedAMSupport.   |
| [`STLAMSupport`](STLAMSupport.md#STLAMSupport)                                     | Defines a STLAMSupport.         |
| [`AMSupport`](AMSupport.md#AMSupport)                                              | Defines a AMSupport.            |
| [`PredefinedAMSupport`](PredefinedAMSupport.md#PredefinedAMSupport)                | Defines a PredefinedAMSupport.  |

<a id="description"></a>

## Description

AdditiveManufacturing subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="AdditiveManufacturing.AMBuildSettings"></a>

### *class* AdditiveManufacturing.AMBuildSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMBuildSettings.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`SaveBuildSettings`](#AdditiveManufacturing.SaveBuildSettings)   | Run the SaveBuildSettings action.                                                 |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`LoadBuildSettings`](#AdditiveManufacturing.LoadBuildSettings)   | Run the LoadBuildSettings action.                                                 |
| [`ResetToDefault`](#AdditiveManufacturing.ResetToDefault)         | ResetToDefault - Restores default values of all properties.                       |
| [`Delete`](#id229)                                                | Run the Delete action.                                                            |
| [`GetChildren`](#id231)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)                                            | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                                              | Creates a new child Image.                                                        |
| [`Activate`](#id235)                                              | Activate the current object.                                                      |
| [`CopyTo`](#id236)                                                | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)                                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238)                               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)                                        | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)                                          | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`LayerHeightType`](#AdditiveManufacturing.LayerHeightType)                                                            | LayerHeightType - Get/Sets the layer height type.                                              |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`ThermalStrainMaterialModel`](#AdditiveManufacturing.ThermalStrainMaterialModel)                                      | Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods. |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.                                             |
| [`ASCParallel`](#AdditiveManufacturing.ASCParallel)                                                                    | Gets or sets the ASCParallel.                                                                  |
| [`ASCPerpendicular`](#AdditiveManufacturing.ASCPerpendicular)                                                          | Gets or sets the ASCPerpendicular.                                                             |
| [`ASCVertical`](#AdditiveManufacturing.ASCVertical)                                                                    | Gets or sets the ASCVertical.                                                                  |
| [`BeamDiameter`](#AdditiveManufacturing.BeamDiameter)                                                                  | Gets or sets the BeamDiameter.                                                                 |
| [`BeamPower`](#AdditiveManufacturing.BeamPower)                                                                        | Gets or sets the BeamPower.                                                                    |
| [`PowderPropertyFactor`](#AdditiveManufacturing.PowderPropertyFactor)                                                  | Gets or sets the PowderPropertyFactor.                                                         |
| [`DwellTimeMultiple`](#AdditiveManufacturing.DwellTimeMultiple)                                                        | Gets or sets the DwellTimeMultiple.                                                            |
| [`GeneratedLayerRotationAngle`](#AdditiveManufacturing.GeneratedLayerRotationAngle)                                    | Gets or sets the GeneratedLayerRotationAngle.                                                  |
| [`GeneratedStartLayerAngle`](#AdditiveManufacturing.GeneratedStartLayerAngle)                                          | Gets or sets the GeneratedStartLayerAngle.                                                     |
| [`NumberOfHeatSources`](#AdditiveManufacturing.NumberOfHeatSources)                                                    | Gets or sets the NumberOfHeatSources.                                                          |
| [`ScanPatternBuildFilePath`](#AdditiveManufacturing.ScanPatternBuildFilePath)                                          | Gets or sets the ScanPatternBuildFilePath.                                                     |
| [`ScanStripeWidth`](#AdditiveManufacturing.ScanStripeWidth)                                                            | Gets or sets the ScanStripeWidth.                                                              |
| [`StrainScalingFactor`](#AdditiveManufacturing.StrainScalingFactor)                                                    | Gets or sets the StrainScalingFactor.                                                          |
| [`StrainScalingFactorX`](#AdditiveManufacturing.StrainScalingFactorX)                                                  | Gets or sets the StrainScalingFactorX.                                                         |
| [`StrainScalingFactorY`](#AdditiveManufacturing.StrainScalingFactorY)                                                  | Gets or sets the StrainScalingFactorY.                                                         |
| [`StrainScalingFactorZ`](#AdditiveManufacturing.StrainScalingFactorZ)                                                  | Gets or sets the StrainScalingFactorZ.                                                         |
| [`ThermalStrainScalingFactor`](#AdditiveManufacturing.ThermalStrainScalingFactor)                                      | Gets or sets the ThermalStrainScalingFactor.                                                   |
| [`BuildGasConvectionCoefficient`](#AdditiveManufacturing.BuildGasConvectionCoefficient)                                | Gets or sets the BuildGasConvectionCoefficient.                                                |
| [`BuildGasTemperature`](#AdditiveManufacturing.BuildGasTemperature)                                                    | Gets or sets the BuildGasTemperature.                                                          |
| [`BuildPowderConvectionCoefficient`](#AdditiveManufacturing.BuildPowderConvectionCoefficient)                          | Gets or sets the BuildPowderConvectionCoefficient.                                             |
| [`BuildPowderTemperature`](#AdditiveManufacturing.BuildPowderTemperature)                                              | Gets or sets the BuildPowderTemperature.                                                       |
| [`CooldownGasConvectionCoefficient`](#AdditiveManufacturing.CooldownGasConvectionCoefficient)                          | Gets or sets the CooldownGasConvectionCoefficient.                                             |
| [`CooldownGasTemperature`](#AdditiveManufacturing.CooldownGasTemperature)                                              | Gets or sets the CooldownGasTemperature.                                                       |
| [`CooldownPowderConvectionCoefficient`](#AdditiveManufacturing.CooldownPowderConvectionCoefficient)                    | Gets or sets the CooldownPowderConvectionCoefficient.                                          |
| [`CooldownPowderTemperature`](#AdditiveManufacturing.CooldownPowderTemperature)                                        | Gets or sets the CooldownPowderTemperature.                                                    |
| [`DepositionThickness`](#AdditiveManufacturing.DepositionThickness)                                                    | Gets or sets the DepositionThickness.                                                          |
| [`DwellTime`](#AdditiveManufacturing.DwellTime)                                                                        | Gets or sets the DwellTime.                                                                    |
| [`HatchSpacing`](#AdditiveManufacturing.HatchSpacing)                                                                  | Gets or sets the HatchSpacing.                                                                 |
| [`LayerHeightValue`](#AdditiveManufacturing.LayerHeightValue)                                                          | Gets or sets the LayerHeightValue.                                                             |
| [`PreheatTemperature`](#AdditiveManufacturing.PreheatTemperature)                                                      | Gets or sets the PreheatTemperature.                                                           |
| [`RoomTemperature`](#AdditiveManufacturing.RoomTemperature)                                                            | Gets or sets the RoomTemperature.                                                              |
| [`ScanSpeed`](#AdditiveManufacturing.ScanSpeed)                                                                        | Gets or sets the ScanSpeed.                                                                    |
| [`BuildGasOrPowderTemperatureType`](#AdditiveManufacturing.BuildGasOrPowderTemperatureType)                            | Gets or sets the BuildGasOrPowderTemperatureType.                                              |
| [`BuildMachineType`](#AdditiveManufacturing.BuildMachineType)                                                          | Gets or sets the BuildMachineType.                                                             |
| [`CooldownGasOrPowderTemperatureType`](#AdditiveManufacturing.CooldownGasOrPowderTemperatureType)                      | Gets or sets the CooldownGasOrPowderTemperatureType.                                           |
| [`InherentStrainDefinition`](#AdditiveManufacturing.InherentStrainDefinition)                                          | Gets or sets the InherentStrainDefinition.                                                     |
| [`MachineLearningModel`](#AdditiveManufacturing.MachineLearningModel)                                                  | Gets or sets the MachineLearningModel.                                                         |
| [`AdditiveProcess`](#AdditiveManufacturing.AdditiveProcess)                                                            | Gets or sets the AdditiveProcess.                                                              |
| [`ScanPatternDefinition`](#AdditiveManufacturing.ScanPatternDefinition)                                                | Gets or sets the ScanPatternDefinition.                                                        |
| [`ThermalStrainMethod`](#AdditiveManufacturing.ThermalStrainMethod)                                                    | Gets or sets the ThermalStrainMethod.                                                          |
| [`InherentStrain`](#AdditiveManufacturing.InherentStrain)                                                              | Gets or sets the InherentStrain.                                                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                   |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                                                     |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                                                          |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                                                           |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                                                            |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.                                             |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                                                   |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object.                                  |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMBuildSettings
```

<a id="property-detail"></a>

## Property detail

<a id="AdditiveManufacturing.LayerHeightType"></a>

### *property* AdditiveManufacturing.LayerHeightType *: [Ansys.Mechanical.DataModel.Enums.AMLayerHeightType](../../../../Mechanical/DataModel/Enums/AMLayerHeightType.md#AMLayerHeightType) | [None](https://docs.python.org/3/library/constants.html#None)*

LayerHeightType - Get/Sets the layer height type.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ThermalStrainMaterialModel"></a>

### *property* AdditiveManufacturing.ThermalStrainMaterialModel *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel](../../../../Mechanical/DataModel/Enums/AMThermalStrainMaterialModel.md#AMThermalStrainMaterialModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.InternalObject"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ASCParallel"></a>

### *property* AdditiveManufacturing.ASCParallel *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCParallel.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ASCPerpendicular"></a>

### *property* AdditiveManufacturing.ASCPerpendicular *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCPerpendicular.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ASCVertical"></a>

### *property* AdditiveManufacturing.ASCVertical *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCVertical.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BeamDiameter"></a>

### *property* AdditiveManufacturing.BeamDiameter *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamDiameter.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BeamPower"></a>

### *property* AdditiveManufacturing.BeamPower *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamPower.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PowderPropertyFactor"></a>

### *property* AdditiveManufacturing.PowderPropertyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PowderPropertyFactor.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.DwellTimeMultiple"></a>

### *property* AdditiveManufacturing.DwellTimeMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DwellTimeMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GeneratedLayerRotationAngle"></a>

### *property* AdditiveManufacturing.GeneratedLayerRotationAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratedLayerRotationAngle.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GeneratedStartLayerAngle"></a>

### *property* AdditiveManufacturing.GeneratedStartLayerAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratedStartLayerAngle.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.NumberOfHeatSources"></a>

### *property* AdditiveManufacturing.NumberOfHeatSources *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfHeatSources.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ScanPatternBuildFilePath"></a>

### *property* AdditiveManufacturing.ScanPatternBuildFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanPatternBuildFilePath.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ScanStripeWidth"></a>

### *property* AdditiveManufacturing.ScanStripeWidth *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanStripeWidth.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.StrainScalingFactor"></a>

### *property* AdditiveManufacturing.StrainScalingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.StrainScalingFactorX"></a>

### *property* AdditiveManufacturing.StrainScalingFactorX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorX.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.StrainScalingFactorY"></a>

### *property* AdditiveManufacturing.StrainScalingFactorY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorY.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.StrainScalingFactorZ"></a>

### *property* AdditiveManufacturing.StrainScalingFactorZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorZ.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ThermalStrainScalingFactor"></a>

### *property* AdditiveManufacturing.ThermalStrainScalingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainScalingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BuildGasConvectionCoefficient"></a>

### *property* AdditiveManufacturing.BuildGasConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BuildGasTemperature"></a>

### *property* AdditiveManufacturing.BuildGasTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BuildPowderConvectionCoefficient"></a>

### *property* AdditiveManufacturing.BuildPowderConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BuildPowderTemperature"></a>

### *property* AdditiveManufacturing.BuildPowderTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildPowderTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CooldownGasConvectionCoefficient"></a>

### *property* AdditiveManufacturing.CooldownGasConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CooldownGasTemperature"></a>

### *property* AdditiveManufacturing.CooldownGasTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CooldownPowderConvectionCoefficient"></a>

### *property* AdditiveManufacturing.CooldownPowderConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CooldownPowderTemperature"></a>

### *property* AdditiveManufacturing.CooldownPowderTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownPowderTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.DepositionThickness"></a>

### *property* AdditiveManufacturing.DepositionThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DepositionThickness.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.DwellTime"></a>

### *property* AdditiveManufacturing.DwellTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DwellTime.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.HatchSpacing"></a>

### *property* AdditiveManufacturing.HatchSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HatchSpacing.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.LayerHeightValue"></a>

### *property* AdditiveManufacturing.LayerHeightValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeightValue.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PreheatTemperature"></a>

### *property* AdditiveManufacturing.PreheatTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreheatTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.RoomTemperature"></a>

### *property* AdditiveManufacturing.RoomTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RoomTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ScanSpeed"></a>

### *property* AdditiveManufacturing.ScanSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BuildGasOrPowderTemperatureType"></a>

### *property* AdditiveManufacturing.BuildGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../Mechanical/DataModel/Enums/AMProcessSettingsType.md#AMProcessSettingsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BuildMachineType"></a>

### *property* AdditiveManufacturing.BuildMachineType *: [Ansys.Mechanical.DataModel.Enums.AMBuildMachineType](../../../../Mechanical/DataModel/Enums/AMBuildMachineType.md#AMBuildMachineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildMachineType.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CooldownGasOrPowderTemperatureType"></a>

### *property* AdditiveManufacturing.CooldownGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../Mechanical/DataModel/Enums/AMProcessSettingsType.md#AMProcessSettingsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.InherentStrainDefinition"></a>

### *property* AdditiveManufacturing.InherentStrainDefinition *: [Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition](../../../../Mechanical/DataModel/Enums/AMInherentStrainDefinition.md#AMInherentStrainDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InherentStrainDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.MachineLearningModel"></a>

### *property* AdditiveManufacturing.MachineLearningModel *: [Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel](../../../../Mechanical/DataModel/Enums/AMMachineLearningModel.md#AMMachineLearningModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MachineLearningModel.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AdditiveProcess"></a>

### *property* AdditiveManufacturing.AdditiveProcess *: [Ansys.Mechanical.DataModel.Enums.AMProcessType](../../../../Mechanical/DataModel/Enums/AMProcessType.md#AMProcessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AdditiveProcess.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ScanPatternDefinition"></a>

### *property* AdditiveManufacturing.ScanPatternDefinition *: [Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition](../../../../Mechanical/DataModel/Enums/AMScanPatternDefinition.md#AMScanPatternDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanPatternDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ThermalStrainMethod"></a>

### *property* AdditiveManufacturing.ThermalStrainMethod *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod](../../../../Mechanical/DataModel/Enums/AMThermalStrainMethod.md#AMThermalStrainMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainMethod.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.InherentStrain"></a>

### *property* AdditiveManufacturing.InherentStrain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InherentStrain.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.DataModelObjectCategory"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Children"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Comments"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Figures"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Images"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Properties"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.VisibleProperties"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AdditiveManufacturing.SaveBuildSettings"></a>

### AdditiveManufacturing.SaveBuildSettings(fName: System.String)

Run the SaveBuildSettings action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.LoadBuildSettings"></a>

### AdditiveManufacturing.LoadBuildSettings(fName: System.String)

Run the LoadBuildSettings action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ResetToDefault"></a>

### AdditiveManufacturing.ResetToDefault()

ResetToDefault - Restores default values of all properties.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Delete"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GetChildren"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddComment"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddFigure"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddImage"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Activate"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CopyTo"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Duplicate"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GroupAllSimilarChildren"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GroupSimilarObjects"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PropertyByName"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PropertyByAPIName"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CreateParameter"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GetParameter"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.RemoveParameter"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.SupportRemoval"></a>

### *class* AdditiveManufacturing.SupportRemoval

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> SupportRemoval class.

> <!-- !! processed by numpydoc !! -->

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import SupportRemoval
```

<a id="AdditiveManufacturing.BaseRemoval"></a>

### *class* AdditiveManufacturing.BaseRemoval

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> BaseRemoval class.

> <!-- !! processed by numpydoc !! -->

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import BaseRemoval
```

<a id="AdditiveManufacturing.BaseUnboltStep"></a>

### *class* AdditiveManufacturing.BaseUnboltStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> BaseUnboltStep class.

> <!-- !! processed by numpydoc !! -->

<a id="id4"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import BaseUnboltStep
```

<a id="AdditiveManufacturing.UserStep"></a>

### *class* AdditiveManufacturing.UserStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> UserStep class.

> <!-- !! processed by numpydoc !! -->

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import UserStep
```

<a id="AdditiveManufacturing.BuildStep"></a>

### *class* AdditiveManufacturing.BuildStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> BuildStep class.

> <!-- !! processed by numpydoc !! -->

<a id="id6"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import BuildStep
```

<a id="AdditiveManufacturing.HeatTreatmentStep"></a>

### *class* AdditiveManufacturing.HeatTreatmentStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> HeatTreatmentStep class.

> <!-- !! processed by numpydoc !! -->

<a id="id7"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import HeatTreatmentStep
```

<a id="AdditiveManufacturing.CooldownStep"></a>

### *class* AdditiveManufacturing.CooldownStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> CooldownStep class.

> <!-- !! processed by numpydoc !! -->

<a id="id8"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import CooldownStep
```

<a id="AdditiveManufacturing.AMSupportRemovalSequence"></a>

### *class* AdditiveManufacturing.AMSupportRemovalSequence

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> AMSupportRemovalSequence class.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Add`](#AdditiveManufacturing.Add)           | Adds a support or base removal step.                                    |
|-----------------------------------------------|-------------------------------------------------------------------------|
| [`RemoveAt`](#AdditiveManufacturing.RemoveAt) | Remove AM step at index.                                                |
| [`Swap`](#id12)                               | Swaps two steps in the Removal sequence.                                |
| [`Swap`](#id12)                               | Swaps two steps in the Removal sequence by name.                        |
| [`IndexOf`](#AdditiveManufacturing.IndexOf)   | Returns index of removal object                                         |
| [`Insert`](#AdditiveManufacturing.Insert)     | Inserts a given step at particular index(zero based)                    |
| [`Contains`](#AdditiveManufacturing.Contains) | Returns true if the step exists in the sequencer. If not, returns false |

### Properties

| [`Count`](#AdditiveManufacturing.Count)   | Count property.   |
|-------------------------------------------|-------------------|

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMSupportRemovalSequence
```

<a id="id10"></a>

## Property detail

<a id="AdditiveManufacturing.Count"></a>

### *property* AdditiveManufacturing.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Count property.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

## Method detail

<a id="AdditiveManufacturing.Add"></a>

### AdditiveManufacturing.Add(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#IAMProcessStep))

Adds a support or base removal step.
Throws a notSupportedException if the same step was already added.
Usage:

> removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval())
> removalSequence.Add(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj))
<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.RemoveAt"></a>

### AdditiveManufacturing.RemoveAt(index: System.Int32)

Remove AM step at index.
Throws IndexOutOfRangeException if index is out of range
Usage:

> removalSequence.RemoveAt(0)
<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Swap"></a>

### AdditiveManufacturing.Swap(item1: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#IAMProcessStep), item2: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#IAMProcessStep))

Swaps two steps in the Removal sequence.
Returns true if successful and false if unsuccessful
Usage:
C#

> removalSequence.Swap(
> : new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval(),
>   new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));

Python
: removalSequence.Swap(
  : Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval(),
    Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj))

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### AdditiveManufacturing.Swap(index1: System.Int32, index2: System.Int32)

Swaps two steps in the Removal sequence by name.
Returns true if successful and false if unsuccessful
Usage:

> removalSequence.Swap(“Base”, “Generated Support 1”)
<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.IndexOf"></a>

### AdditiveManufacturing.IndexOf(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#IAMProcessStep))

Returns index of removal object
Returns -1 if removal object not found
Usage:
C#

> index1 = removalSequence.IndexOf(new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
> index2 = removalSequence.IndexOf(new Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));

Python
: index1 = removalSequence.IndexOf(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
  index2 = removalSequence.IndexOf(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Insert"></a>

### AdditiveManufacturing.Insert(index: System.Int32, item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#IAMProcessStep))

Inserts a given step at particular index(zero based)
Throws an IndexOutOfRangeException if the step is being inserted out of range.
Throws a NotSupportedException if the insertion is invalid
Usage:

> Sequence.Insert(0,Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.UserStep())
<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Contains"></a>

### AdditiveManufacturing.Contains(item: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.IAMProcessStep](IAMProcessStep.md#IAMProcessStep))

Returns true if the step exists in the sequencer. If not, returns false
Usage:

> index1 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.BaseRemoval());
> index2 = removalSequence.Contains(Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.SupportRemoval(supportObj));
<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AMProcess"></a>

### *class* AdditiveManufacturing.AMProcess

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMProcess.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetSequence`](#AdditiveManufacturing.GetSequence)                           | Gets the support removal sequence for a given environment.                        |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ResetAllSequences`](#AdditiveManufacturing.ResetAllSequences)               | Resets the sequence for all analyses                                              |
| [`AddCartesianMesh`](#AdditiveManufacturing.AddCartesianMesh)                 | AddCartesianMesh method.                                                          |
| [`CreateBuildToBaseContact`](#AdditiveManufacturing.CreateBuildToBaseContact) | Run the CreateBuildToBaseContact action.                                          |
| [`CreateAMBondConnections`](#AdditiveManufacturing.CreateAMBondConnections)   | Run the CreateAMBondConnections action.                                           |
| [`GenerateAMStrains`](#AdditiveManufacturing.GenerateAMStrains)               | Run the GenerateAMStrains action.                                                 |
| [`CleanAMStrains`](#AdditiveManufacturing.CleanAMStrains)                     | Run the CleanAMStrains action.                                                    |
| [`HasAMStrains`](#AdditiveManufacturing.HasAMStrains)                         | Get the HasAMStrains property.                                                    |
| [`AddSupportGroup`](#AdditiveManufacturing.AddSupportGroup)                   | Creates a new AMSupportGroup                                                      |
| [`AddGeneratedAMSupport`](#id53)                                              | Creates a new GeneratedAMSupport                                                  |
| [`AddPredefinedAMSupport`](#id54)                                             | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](#id55)                                                    | Creates a new STLAMSupport                                                        |
| [`Delete`](#id229)                                                            | Run the Delete action.                                                            |
| [`GetChildren`](#id231)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)                                                        | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)                                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                                                          | Creates a new child Image.                                                        |
| [`Activate`](#id235)                                                          | Activate the current object.                                                      |
| [`CopyTo`](#id236)                                                            | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)                                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238)                                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)                                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)                                                    | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)                                                 | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)                                                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)                                                      | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)                                                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`BuildGeometry`](#AdditiveManufacturing.BuildGeometry)                                                                | Gets or sets the PartGeometry using the deprecated BuildGeometry method.   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.                         |
| [`SubsampleRate`](#id105)                                                                                              | Gets or sets the SubsampleRate.                                            |
| [`ZLocationAtTopOfBase`](#AdditiveManufacturing.ZLocationAtTopOfBase)                                                  | Gets the ZLocationAtTopOfBase.                                             |
| [`ElementSize`](#id106)                                                                                                | Gets or sets the ElementSize.                                              |
| [`WallThickness`](#id216)                                                                                              | Gets or sets the WallThickness.                                            |
| [`LengthUnits`](#id107)                                                                                                | Gets or sets the LengthUnits.                                              |
| [`NonlinearEffects`](#AdditiveManufacturing.NonlinearEffects)                                                          | Gets or sets the NonlinearEffects.                                         |
| [`MeshUsingVoxelization`](#AdditiveManufacturing.MeshUsingVoxelization)                                                | Gets or sets the MeshUsingVoxelization.                                    |
| [`BaseGeometry`](#AdditiveManufacturing.BaseGeometry)                                                                  | Gets or sets the BaseGeometry.                                             |
| [`PartGeometry`](#AdditiveManufacturing.PartGeometry)                                                                  | Gets or sets the PartGeometry.                                             |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                               |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                                 |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                                      |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                                       |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                                        |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.                         |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                               |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object.              |

<a id="id13"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMProcess
```

<a id="id14"></a>

## Property detail

<a id="AdditiveManufacturing.BuildGeometry"></a>

### *property* AdditiveManufacturing.BuildGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry using the deprecated BuildGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSimulationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.SubsampleRate"></a>

### *property* AdditiveManufacturing.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ZLocationAtTopOfBase"></a>

### *property* AdditiveManufacturing.ZLocationAtTopOfBase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZLocationAtTopOfBase.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ElementSize"></a>

### *property* AdditiveManufacturing.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.WallThickness"></a>

### *property* AdditiveManufacturing.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.LengthUnits"></a>

### *property* AdditiveManufacturing.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.NonlinearEffects"></a>

### *property* AdditiveManufacturing.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.MeshUsingVoxelization"></a>

### *property* AdditiveManufacturing.MeshUsingVoxelization *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.BaseGeometry"></a>

### *property* AdditiveManufacturing.BaseGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PartGeometry"></a>

### *property* AdditiveManufacturing.PartGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

## Method detail

<a id="AdditiveManufacturing.GetSequence"></a>

### AdditiveManufacturing.GetSequence(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#Analysis))

Gets the support removal sequence for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ResetAllSequences"></a>

### AdditiveManufacturing.ResetAllSequences()

Resets the sequence for all analyses

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddCartesianMesh"></a>

### AdditiveManufacturing.AddCartesianMesh()

AddCartesianMesh method.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CreateBuildToBaseContact"></a>

### AdditiveManufacturing.CreateBuildToBaseContact()

Run the CreateBuildToBaseContact action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CreateAMBondConnections"></a>

### AdditiveManufacturing.CreateAMBondConnections()

Run the CreateAMBondConnections action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GenerateAMStrains"></a>

### AdditiveManufacturing.GenerateAMStrains()

Run the GenerateAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CleanAMStrains"></a>

### AdditiveManufacturing.CleanAMStrains()

Run the CleanAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.HasAMStrains"></a>

### AdditiveManufacturing.HasAMStrains()

Get the HasAMStrains property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddSupportGroup"></a>

### AdditiveManufacturing.AddSupportGroup()

Creates a new AMSupportGroup

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddGeneratedAMSupport"></a>

### AdditiveManufacturing.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddPredefinedAMSupport"></a>

### AdditiveManufacturing.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddSTLAMSupport"></a>

### AdditiveManufacturing.AddSTLAMSupport()

Creates a new STLAMSupport

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id27"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id31"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AMSupportGroup"></a>

### *class* AdditiveManufacturing.AMSupportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMSupportGroup.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`DetectSupportFaces`](#AdditiveManufacturing.DetectSupportFaces)           | Runs the Detect Support Faces action.                                             |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddGeneratedAMSupport`](#id53)                                            | Creates a new GeneratedAMSupport                                                  |
| [`AddPredefinedAMSupport`](#id54)                                           | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](#id55)                                                  | Creates a new GeneratedAMSupport                                                  |
| [`PromoteToNamedSelection`](#AdditiveManufacturing.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#id229)                                                          | Run the Delete action.                                                            |
| [`GetChildren`](#id231)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)                                                      | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                                                        | Creates a new child Image.                                                        |
| [`Activate`](#id235)                                                        | Activate the current object.                                                      |
| [`CopyTo`](#id236)                                                          | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238)                                         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)                                             | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)                                                  | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)                                               | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)                                                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)                                                    | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)                                                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`HangAngle`](#AdditiveManufacturing.HangAngle)                                                                        | Gets or sets the HangAngle.                                   |
| [`DetectAboveZLocation`](#AdditiveManufacturing.DetectAboveZLocation)                                                  | Gets or sets the DetectAboveZLocation.                        |
| [`OutputType`](#AdditiveManufacturing.OutputType)                                                                      | Gets or sets the OutputType.                                  |
| [`GenerateOnRemesh`](#AdditiveManufacturing.GenerateOnRemesh)                                                          | Gets or sets the GenerateOnRemesh.                            |
| [`Location`](#id202)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id41"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMSupportGroup
```

<a id="id42"></a>

## Property detail

<a id="id43"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.HangAngle"></a>

### *property* AdditiveManufacturing.HangAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HangAngle.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.DetectAboveZLocation"></a>

### *property* AdditiveManufacturing.DetectAboveZLocation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectAboveZLocation.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.OutputType"></a>

### *property* AdditiveManufacturing.OutputType *: [Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType](../../../../Mechanical/DataModel/Enums/AMSupportGroupOutputType.md#AMSupportGroupOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputType.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GenerateOnRemesh"></a>

### *property* AdditiveManufacturing.GenerateOnRemesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Location"></a>

### *property* AdditiveManufacturing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id46"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id47"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id48"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id52"></a>

## Method detail

<a id="AdditiveManufacturing.DetectSupportFaces"></a>

### AdditiveManufacturing.DetectSupportFaces()

Runs the Detect Support Faces action.

<!-- !! processed by numpydoc !! -->

<a id="id53"></a>

### AdditiveManufacturing.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### AdditiveManufacturing.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### AdditiveManufacturing.AddSTLAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PromoteToNamedSelection"></a>

### AdditiveManufacturing.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id57"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id58"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id59"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id62"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id63"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id64"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id68"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id69"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GeneratedAMSupport"></a>

### *class* AdditiveManufacturing.GeneratedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeneratedAMSupport.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id133)                      | Run the ClearGeneratedData action.                                                |
|-----------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateSupportBodies`](#id134)                   | Generate Support Bodies.                                                          |
| [`CreateNamedSelectionOfGeneratedElements`](#id135) | Run the PromoteToNamedSelection action.                                           |
| [`GetGeneratedBody`](#id136)                        | Returns the generated body object                                                 |
| [`AddCommandSnippet`](#id228)                       | Creates a new CommandSnippet                                                      |
| [`Delete`](#id229)                                  | Run the Delete action.                                                            |
| [`GetChildren`](#id231)                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)                              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                                | Creates a new child Image.                                                        |
| [`Activate`](#id235)                                | Activate the current object.                                                      |
| [`CopyTo`](#id236)                                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238)                 | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)                          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)                            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Mode`](#AdditiveManufacturing.Mode)                                                                                  | Gets or sets the Mode.                                        |
| [`Location`](#id202)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ThermalConductivityMultipleInX`](#id204)                                                                             | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#id205)                                                                             | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#id206)                                                                             | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#id207)                                                                                            | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#id208)                                                                                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#id209)                                                                                  | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#id210)                                                                                  | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#id211)                                                                                  | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#id212)                                                                                   | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#id213)                                                                                   | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#id214)                                                                                   | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#id215)                                                                                                | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#id216)                                                                                              | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#id218)                                                                                            | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#id219)                                                                                                | Gets or sets the SupportType.                                 |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id72"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import GeneratedAMSupport
```

<a id="id73"></a>

## Property detail

<a id="id74"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Mode"></a>

### *property* AdditiveManufacturing.Mode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* AdditiveManufacturing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id76"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ThermalConductivityMultipleInX"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ThermalConductivityMultipleInY"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ThermalConductivityMultipleInZ"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.DensityMultiple"></a>

### *property* AdditiveManufacturing.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.MaterialMultiplier"></a>

### *property* AdditiveManufacturing.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ElasticModulusMultipleInX"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ElasticModulusMultipleInY"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ElasticModulusMultipleInZ"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ShearModulusMultipleInXY"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ShearModulusMultipleInXZ"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ShearModulusMultipleInYZ"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.WallSpacing"></a>

### *property* AdditiveManufacturing.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="id77"></a>

### *property* AdditiveManufacturing.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Volume"></a>

### *property* AdditiveManufacturing.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.MultiplierEntry"></a>

### *property* AdditiveManufacturing.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.SupportType"></a>

### *property* AdditiveManufacturing.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="id78"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id82"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id83"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

## Method detail

<a id="AdditiveManufacturing.ClearGeneratedData"></a>

### AdditiveManufacturing.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GenerateSupportBodies"></a>

### AdditiveManufacturing.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#Progress))

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CreateNamedSelectionOfGeneratedElements"></a>

### AdditiveManufacturing.CreateNamedSelectionOfGeneratedElements()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GetGeneratedBody"></a>

### AdditiveManufacturing.GetGeneratedBody()

Returns the generated body object

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AddCommandSnippet"></a>

### AdditiveManufacturing.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id87"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id88"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id89"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id94"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id95"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id96"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id99"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id100"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id101"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.STLAMSupport"></a>

### *class* AdditiveManufacturing.STLAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a STLAMSupport.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`ClearGeneratedData`](#id133)                                                                                    | Run the ClearGeneratedData action.                                                |
|-------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateSupportBodies`](#id134)                                                                                 | Generate Support Bodies.                                                          |
| [`CreateNamedSelectionOfGeneratedElements`](#id135)                                                               | Create a named selection of the generated elements.                               |
| [`CreateNamedSelectionOfExternalElementFaces`](#AdditiveManufacturing.CreateNamedSelectionOfExternalElementFaces) | Create a named selection of the generated exterior element faces.                 |
| [`ExportStl`](#AdditiveManufacturing.ExportStl)                                                                   | Export STL data.                                                                  |
| [`GetGeneratedBody`](#id136)                                                                                      | Returns the generated body object                                                 |
| [`ImportSTL`](#AdditiveManufacturing.ImportSTL)                                                                   | Run the ImportSTL action.                                                         |
| [`AddCommandSnippet`](#id228)                                                                                     | Creates a new CommandSnippet                                                      |
| [`Delete`](#id229)                                                                                                | Run the Delete action.                                                            |
| [`GetChildren`](#id231)                                                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)                                                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)                                                                                            | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)                                                                                             | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                                                                                              | Creates a new child Image.                                                        |
| [`Activate`](#id235)                                                                                              | Activate the current object.                                                      |
| [`CopyTo`](#id236)                                                                                                | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)                                                                                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238)                                                                               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)                                                                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)                                                                                        | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)                                                                                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)                                                                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)                                                                                          | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)                                                                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`VoxelSize`](#AdditiveManufacturing.VoxelSize)                                                                        | Gets the VoxelSize.                                           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Filename`](#AdditiveManufacturing.Filename)                                                                          | Gets or sets the Filename.                                    |
| [`SubsampleRate`](#id105)                                                                                              | Gets or sets the SubsampleRate.                               |
| [`ElementSize`](#id106)                                                                                                | Gets the ElementSize.                                         |
| [`StlWallThickness`](#AdditiveManufacturing.StlWallThickness)                                                          | Gets or sets the StlWallThickness.                            |
| [`LengthUnits`](#id107)                                                                                                | Gets or sets the LengthUnits.                                 |
| [`STLSupportView`](#AdditiveManufacturing.STLSupportView)                                                              | Gets or sets the STLSupportView.                              |
| [`Source`](#AdditiveManufacturing.Source)                                                                              | Gets or sets the Source.                                      |
| [`STLSupportType`](#AdditiveManufacturing.STLSupportType)                                                              | Gets or sets the STLSupportType.                              |
| [`STL`](../STL.md#STL)                                                                                                 | Gets or sets the STL.                                         |
| [`GeometrySelection`](#AdditiveManufacturing.GeometrySelection)                                                        | Gets or sets the GeometrySelection.                           |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ThermalConductivityMultipleInX`](#id204)                                                                             | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#id205)                                                                             | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#id206)                                                                             | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#id207)                                                                                            | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#id208)                                                                                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#id209)                                                                                  | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#id210)                                                                                  | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#id211)                                                                                  | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#id212)                                                                                   | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#id213)                                                                                   | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#id214)                                                                                   | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#id215)                                                                                                | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#id216)                                                                                              | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#id218)                                                                                            | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#id219)                                                                                                | Gets or sets the SupportType.                                 |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id102"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import STLAMSupport
```

<a id="id103"></a>

## Property detail

<a id="AdditiveManufacturing.VoxelSize"></a>

### *property* AdditiveManufacturing.VoxelSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoxelSize.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Filename"></a>

### *property* AdditiveManufacturing.Filename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Filename.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* AdditiveManufacturing.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="id106"></a>

### *property* AdditiveManufacturing.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.StlWallThickness"></a>

### *property* AdditiveManufacturing.StlWallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StlWallThickness.

<!-- !! processed by numpydoc !! -->

<a id="id107"></a>

### *property* AdditiveManufacturing.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.STLSupportView"></a>

### *property* AdditiveManufacturing.STLSupportView *: [Ansys.Mechanical.DataModel.Enums.STLSupportViewType](../../../../Mechanical/DataModel/Enums/STLSupportViewType.md#STLSupportViewType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportView.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Source"></a>

### *property* AdditiveManufacturing.Source *: [Ansys.Mechanical.DataModel.Enums.AMStlSource](../../../../Mechanical/DataModel/Enums/AMStlSource.md#AMStlSource) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Source.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.STLSupportType"></a>

### *property* AdditiveManufacturing.STLSupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportSTLType](../../../../Mechanical/DataModel/Enums/AMSupportSTLType.md#AMSupportSTLType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STLSupportType.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.STL"></a>

### *property* AdditiveManufacturing.STL *: [Ansys.ACT.Automation.Mechanical.STL](../STL.md#STL) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the STL.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.GeometrySelection"></a>

### *property* AdditiveManufacturing.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="id108"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id109"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="id110"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* AdditiveManufacturing.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* AdditiveManufacturing.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id114"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="id115"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="id120"></a>

### *property* AdditiveManufacturing.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="id121"></a>

### *property* AdditiveManufacturing.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* AdditiveManufacturing.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* AdditiveManufacturing.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="id124"></a>

### *property* AdditiveManufacturing.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="id125"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id126"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id129"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id130"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

## Method detail

<a id="id133"></a>

### AdditiveManufacturing.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="id134"></a>

### AdditiveManufacturing.GenerateSupportBodies(progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#Progress))

Generate Support Bodies.

<!-- !! processed by numpydoc !! -->

<a id="id135"></a>

### AdditiveManufacturing.CreateNamedSelectionOfGeneratedElements()

Create a named selection of the generated elements.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.CreateNamedSelectionOfExternalElementFaces"></a>

### AdditiveManufacturing.CreateNamedSelectionOfExternalElementFaces()

Create a named selection of the generated exterior element faces.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ExportStl"></a>

### AdditiveManufacturing.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](../../../../Mechanical/Application/Progress.md#Progress))

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### AdditiveManufacturing.GetGeneratedBody()

Returns the generated body object

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.ImportSTL"></a>

### AdditiveManufacturing.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### AdditiveManufacturing.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id139"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id140"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id141"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id144"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id145"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id146"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id149"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id150"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id151"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.AMSupport"></a>

### *class* AdditiveManufacturing.AMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMSupport.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddCommandSnippet`](#id228)       | Creates a new CommandSnippet                                                      |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id229)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id231)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                | Creates a new child Image.                                                        |
| [`Activate`](#id235)                | Activate the current object.                                                      |
| [`CopyTo`](#id236)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ThermalConductivityMultipleInX`](#id204)                                                                             | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#id205)                                                                             | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#id206)                                                                             | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#id207)                                                                                            | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#id208)                                                                                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#id209)                                                                                  | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#id210)                                                                                  | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#id211)                                                                                  | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#id212)                                                                                   | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#id213)                                                                                   | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#id214)                                                                                   | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#id215)                                                                                                | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#id216)                                                                                              | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#id218)                                                                                            | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#id219)                                                                                                | Gets or sets the SupportType.                                 |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id154"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMSupport
```

<a id="id155"></a>

## Property detail

<a id="id156"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id157"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="id158"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* AdditiveManufacturing.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="id161"></a>

### *property* AdditiveManufacturing.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id162"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="id164"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="id165"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="id166"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="id168"></a>

### *property* AdditiveManufacturing.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="id169"></a>

### *property* AdditiveManufacturing.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* AdditiveManufacturing.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* AdditiveManufacturing.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* AdditiveManufacturing.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id174"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id175"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id176"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id179"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id180"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id181"></a>

## Method detail

<a id="id182"></a>

### AdditiveManufacturing.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id183"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id184"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id185"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id187"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id188"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id190"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id191"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id192"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id193"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id195"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id196"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id197"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.PredefinedAMSupport"></a>

### *class* AdditiveManufacturing.PredefinedAMSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PredefinedAMSupport.

> <!-- !! processed by numpydoc !! -->

### Methods

| [`AddCommandSnippet`](#id228)       | Creates a new CommandSnippet                                                      |
|-------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#id229)                  | Run the Delete action.                                                            |
| [`GetChildren`](#id231)             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id231)             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#id232)              | Creates a new child Comment.                                                      |
| [`AddFigure`](#id233)               | Creates a new child Figure.                                                       |
| [`AddImage`](#id234)                | Creates a new child Image.                                                        |
| [`Activate`](#id235)                | Activate the current object.                                                      |
| [`CopyTo`](#id236)                  | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#id237)               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#id238) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#id239)     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#id240)          | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#id241)       | Get a property by its API name.                                                   |
| [`CreateParameter`](#id242)         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#id243)            | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#id244)         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Suppressed`](#AdditiveManufacturing.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`Location`](#id202)                                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ThermalConductivityMultipleInX`](#id204)                                                                             | Gets or sets the ThermalConductivityMultipleInX.              |
| [`ThermalConductivityMultipleInY`](#id205)                                                                             | Gets or sets the ThermalConductivityMultipleInY.              |
| [`ThermalConductivityMultipleInZ`](#id206)                                                                             | Gets or sets the ThermalConductivityMultipleInZ.              |
| [`DensityMultiple`](#id207)                                                                                            | Gets or sets the DensityMultiple.                             |
| [`MaterialMultiplier`](#id208)                                                                                         | Gets or sets the MaterialMultiplier.                          |
| [`ElasticModulusMultipleInX`](#id209)                                                                                  | Gets or sets the ElasticModulusMultipleInX.                   |
| [`ElasticModulusMultipleInY`](#id210)                                                                                  | Gets or sets the ElasticModulusMultipleInY.                   |
| [`ElasticModulusMultipleInZ`](#id211)                                                                                  | Gets or sets the ElasticModulusMultipleInZ.                   |
| [`ShearModulusMultipleInXY`](#id212)                                                                                   | Gets or sets the ShearModulusMultipleInXY.                    |
| [`ShearModulusMultipleInXZ`](#id213)                                                                                   | Gets or sets the ShearModulusMultipleInXZ.                    |
| [`ShearModulusMultipleInYZ`](#id214)                                                                                   | Gets or sets the ShearModulusMultipleInYZ.                    |
| [`WallSpacing`](#id215)                                                                                                | Gets or sets the WallSpacing.                                 |
| [`WallThickness`](#id216)                                                                                              | Gets or sets the WallThickness.                               |
| [`Volume`](../Results/Volume.md#Volume)                                                                                | Gets or sets the Volume.                                      |
| [`MultiplierEntry`](#id218)                                                                                            | Gets or sets the MultiplierEntry.                             |
| [`SupportType`](#id219)                                                                                                | Gets or sets the SupportType.                                 |
| [`Children`](#id220)                                                                                                   | Gets the list of children.                                    |
| [`Comments`](#id221)                                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#id222)                                                                                                    | Gets the list of associated figures.                          |
| [`Images`](#id223)                                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id224)                                                                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#id225)                                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#id226)                                                                                          | Gets the list of properties that are visible for this object. |

<a id="id199"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import PredefinedAMSupport
```

<a id="id200"></a>

## Property detail

<a id="id201"></a>

### *property* AdditiveManufacturing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.Suppressed"></a>

### *property* AdditiveManufacturing.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="id202"></a>

### *property* AdditiveManufacturing.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* AdditiveManufacturing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id204"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="id205"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="id206"></a>

### *property* AdditiveManufacturing.ThermalConductivityMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalConductivityMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* AdditiveManufacturing.DensityMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DensityMultiple.

<!-- !! processed by numpydoc !! -->

<a id="id208"></a>

### *property* AdditiveManufacturing.MaterialMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="id209"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInX.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInY.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* AdditiveManufacturing.ElasticModulusMultipleInZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElasticModulusMultipleInZ.

<!-- !! processed by numpydoc !! -->

<a id="id212"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXY.

<!-- !! processed by numpydoc !! -->

<a id="id213"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInXZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInXZ.

<!-- !! processed by numpydoc !! -->

<a id="id214"></a>

### *property* AdditiveManufacturing.ShearModulusMultipleInYZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearModulusMultipleInYZ.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* AdditiveManufacturing.WallSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallSpacing.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* AdditiveManufacturing.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* AdditiveManufacturing.Volume *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Volume.

<!-- !! processed by numpydoc !! -->

<a id="id218"></a>

### *property* AdditiveManufacturing.MultiplierEntry *: [Ansys.Mechanical.DataModel.Enums.AMMultiplierEntryType](../../../../Mechanical/DataModel/Enums/AMMultiplierEntryType.md#AMMultiplierEntryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultiplierEntry.

<!-- !! processed by numpydoc !! -->

<a id="id219"></a>

### *property* AdditiveManufacturing.SupportType *: [Ansys.Mechanical.DataModel.Enums.AMSupportType](../../../../Mechanical/DataModel/Enums/AMSupportType.md#AMSupportType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SupportType.

<!-- !! processed by numpydoc !! -->

<a id="id220"></a>

### *property* AdditiveManufacturing.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* AdditiveManufacturing.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="id222"></a>

### *property* AdditiveManufacturing.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="id223"></a>

### *property* AdditiveManufacturing.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id224"></a>

### *property* AdditiveManufacturing.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* AdditiveManufacturing.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="id226"></a>

### *property* AdditiveManufacturing.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="id227"></a>

## Method detail

<a id="id228"></a>

### AdditiveManufacturing.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### AdditiveManufacturing.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### AdditiveManufacturing.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### AdditiveManufacturing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### AdditiveManufacturing.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### AdditiveManufacturing.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### AdditiveManufacturing.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### AdditiveManufacturing.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="id236"></a>

### AdditiveManufacturing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="id237"></a>

### AdditiveManufacturing.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### AdditiveManufacturing.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### AdditiveManufacturing.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="id240"></a>

### AdditiveManufacturing.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="id241"></a>

### AdditiveManufacturing.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="id242"></a>

### AdditiveManufacturing.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="id243"></a>

### AdditiveManufacturing.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="id244"></a>

### AdditiveManufacturing.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AdditiveManufacturing.IAMProcessStep"></a>

### *class* AdditiveManufacturing.IAMProcessStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> IAMProcessStep interface.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ProcessStepType`](#AdditiveManufacturing.ProcessStepType)   | ProcessStepType property.   |
|---------------------------------------------------------------|-----------------------------|

<a id="id245"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import IAMProcessStep
```

<a id="id246"></a>

## Property detail

<a id="AdditiveManufacturing.ProcessStepType"></a>

### *property* AdditiveManufacturing.ProcessStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

ProcessStepType property.

<!-- !! processed by numpydoc !! -->
