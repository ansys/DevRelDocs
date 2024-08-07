# `AMBuildSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMBuildSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SaveBuildSettings`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.SaveBuildSettings)             | Run the SaveBuildSettings action.                                                 |
| [`LoadBuildSettings`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.LoadBuildSettings)             | Run the LoadBuildSettings action.                                                 |
| [`ResetToDefault`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ResetToDefault)                   | ResetToDefault - Restores default values of all properties.                       |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`LayerHeightType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.LayerHeightType)                                         | LayerHeightType - Get/Sets the layer height type.                                              |
| [`ThermalStrainMaterialModel`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ThermalStrainMaterialModel)                   | Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods. |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#id0)                                                                      | Gets the internal object. For advanced usage only.                                             |
| [`Absorptivity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Absorptivity)                                               | Gets or sets the Absorptivity.                                                                 |
| [`ASCParallel`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ASCParallel)                                                 | Gets or sets the ASCParallel.                                                                  |
| [`ASCPerpendicular`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ASCPerpendicular)                                       | Gets or sets the ASCPerpendicular.                                                             |
| [`ASCVertical`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ASCVertical)                                                 | Gets or sets the ASCVertical.                                                                  |
| [`BeamDiameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BeamDiameter)                                               | Gets or sets the BeamDiameter.                                                                 |
| [`BeamPower`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BeamPower)                                                     | Gets or sets the BeamPower.                                                                    |
| [`PowderPropertyFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.PowderPropertyFactor)                               | Gets or sets the PowderPropertyFactor.                                                         |
| [`DwellTimeMultiple`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.DwellTimeMultiple)                                     | Gets or sets the DwellTimeMultiple.                                                            |
| [`GeneratedLayerRotationAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.GeneratedLayerRotationAngle)                 | Gets or sets the GeneratedLayerRotationAngle.                                                  |
| [`GeneratedStartLayerAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.GeneratedStartLayerAngle)                       | Gets or sets the GeneratedStartLayerAngle.                                                     |
| [`NumberOfHeatSources`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.NumberOfHeatSources)                                 | Gets or sets the NumberOfHeatSources.                                                          |
| [`ScanPatternBuildFilePath`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ScanPatternBuildFilePath)                       | Gets or sets the ScanPatternBuildFilePath.                                                     |
| [`ScanStripeWidth`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ScanStripeWidth)                                         | Gets or sets the ScanStripeWidth.                                                              |
| [`StrainScalingFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.StrainScalingFactor)                                 | Gets or sets the StrainScalingFactor.                                                          |
| [`StrainScalingFactorX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.StrainScalingFactorX)                               | Gets or sets the StrainScalingFactorX.                                                         |
| [`StrainScalingFactorY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.StrainScalingFactorY)                               | Gets or sets the StrainScalingFactorY.                                                         |
| [`StrainScalingFactorZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.StrainScalingFactorZ)                               | Gets or sets the StrainScalingFactorZ.                                                         |
| [`ThermalStrainScalingFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ThermalStrainScalingFactor)                   | Gets or sets the ThermalStrainScalingFactor.                                                   |
| [`BuildGasConvectionCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BuildGasConvectionCoefficient)             | Gets or sets the BuildGasConvectionCoefficient.                                                |
| [`BuildGasTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BuildGasTemperature)                                 | Gets or sets the BuildGasTemperature.                                                          |
| [`BuildPowderConvectionCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BuildPowderConvectionCoefficient)       | Gets or sets the BuildPowderConvectionCoefficient.                                             |
| [`BuildPowderTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BuildPowderTemperature)                           | Gets or sets the BuildPowderTemperature.                                                       |
| [`CooldownGasConvectionCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CooldownGasConvectionCoefficient)       | Gets or sets the CooldownGasConvectionCoefficient.                                             |
| [`CooldownGasTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CooldownGasTemperature)                           | Gets or sets the CooldownGasTemperature.                                                       |
| [`CooldownPowderConvectionCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CooldownPowderConvectionCoefficient) | Gets or sets the CooldownPowderConvectionCoefficient.                                          |
| [`CooldownPowderTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CooldownPowderTemperature)                     | Gets or sets the CooldownPowderTemperature.                                                    |
| [`DepositionThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.DepositionThickness)                                 | Gets or sets the DepositionThickness.                                                          |
| [`DwellTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.DwellTime)                                                     | Gets or sets the DwellTime.                                                                    |
| [`HatchSpacing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.HatchSpacing)                                               | Gets or sets the HatchSpacing.                                                                 |
| [`LayerHeightValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.LayerHeightValue)                                       | Gets or sets the LayerHeightValue.                                                             |
| [`PreheatTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.PreheatTemperature)                                   | Gets or sets the PreheatTemperature.                                                           |
| [`RoomTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.RoomTemperature)                                         | Gets or sets the RoomTemperature.                                                              |
| [`ScanSpeed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ScanSpeed)                                                     | Gets or sets the ScanSpeed.                                                                    |
| [`BuildGasOrPowderTemperatureType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BuildGasOrPowderTemperatureType)         | Gets or sets the BuildGasOrPowderTemperatureType.                                              |
| [`BuildMachineType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.BuildMachineType)                                       | Gets or sets the BuildMachineType.                                                             |
| [`CooldownGasOrPowderTemperatureType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.CooldownGasOrPowderTemperatureType)   | Gets or sets the CooldownGasOrPowderTemperatureType.                                           |
| [`HeatingDuration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.HeatingDuration)                                         | Gets or sets the HeatingDuration.                                                              |
| [`HeatingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.HeatingMethod)                                             | Gets or sets the HeatingMethod.                                                                |
| [`InherentStrainDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.InherentStrainDefinition)                       | Gets or sets the InherentStrainDefinition.                                                     |
| [`MachineLearningModel`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.MachineLearningModel)                               | Gets or sets the MachineLearningModel.                                                         |
| [`AdditiveProcess`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.AdditiveProcess)                                         | Gets or sets the AdditiveProcess.                                                              |
| [`ScanPatternDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ScanPatternDefinition)                             | Gets or sets the ScanPatternDefinition.                                                        |
| [`ThermalStrainMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.ThermalStrainMethod)                                 | Gets or sets the ThermalStrainMethod.                                                          |
| [`InherentStrain`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.InherentStrain)                                           | Gets or sets the InherentStrain.                                                               |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.DataModelObjectCategory)                         | Gets the current DataModelObjectâ€™s category.                                                   |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Children)                                                       | Gets the list of children.                                                                     |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Comments)                                                       | Gets the list of associated comments.                                                          |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Figures)                                                         | Gets the list of associated figures.                                                           |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Images)                                                           | Gets the list of associated images.                                                            |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#id0)                                                                      | Gets the internal object. For advanced usage only.                                             |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.Properties)                                                   | Gets the list of properties for this object.                                                   |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMBuildSettings.md#AMBuildSettings.VisibleProperties)                                     | Gets the list of properties that are visible for this object.                                  |

<a id="property-detail"></a>

## Property detail

<a id="AMBuildSettings.LayerHeightType"></a>

### *property* AMBuildSettings.LayerHeightType *: [Ansys.Mechanical.DataModel.Enums.AMLayerHeightType](../../../../Mechanical/DataModel/Enums/AMLayerHeightType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMLayerHeightType) | [None](https://docs.python.org/3/library/constants.html#None)*

LayerHeightType - Get/Sets the layer height type.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ThermalStrainMaterialModel"></a>

### *property* AMBuildSettings.ThermalStrainMaterialModel *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel](../../../../Mechanical/DataModel/Enums/AMThermalStrainMaterialModel.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InternalObject"></a>

### *property* AMBuildSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSettingsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Absorptivity"></a>

### *property* AMBuildSettings.Absorptivity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Absorptivity.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ASCParallel"></a>

### *property* AMBuildSettings.ASCParallel *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCParallel.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ASCPerpendicular"></a>

### *property* AMBuildSettings.ASCPerpendicular *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCPerpendicular.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ASCVertical"></a>

### *property* AMBuildSettings.ASCVertical *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ASCVertical.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BeamDiameter"></a>

### *property* AMBuildSettings.BeamDiameter *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamDiameter.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BeamPower"></a>

### *property* AMBuildSettings.BeamPower *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamPower.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PowderPropertyFactor"></a>

### *property* AMBuildSettings.PowderPropertyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PowderPropertyFactor.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DwellTimeMultiple"></a>

### *property* AMBuildSettings.DwellTimeMultiple *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DwellTimeMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GeneratedLayerRotationAngle"></a>

### *property* AMBuildSettings.GeneratedLayerRotationAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratedLayerRotationAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GeneratedStartLayerAngle"></a>

### *property* AMBuildSettings.GeneratedStartLayerAngle *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneratedStartLayerAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.NumberOfHeatSources"></a>

### *property* AMBuildSettings.NumberOfHeatSources *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfHeatSources.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanPatternBuildFilePath"></a>

### *property* AMBuildSettings.ScanPatternBuildFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanPatternBuildFilePath.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanStripeWidth"></a>

### *property* AMBuildSettings.ScanStripeWidth *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanStripeWidth.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactor"></a>

### *property* AMBuildSettings.StrainScalingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorX"></a>

### *property* AMBuildSettings.StrainScalingFactorX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorX.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorY"></a>

### *property* AMBuildSettings.StrainScalingFactorY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorY.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorZ"></a>

### *property* AMBuildSettings.StrainScalingFactorZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StrainScalingFactorZ.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ThermalStrainScalingFactor"></a>

### *property* AMBuildSettings.ThermalStrainScalingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainScalingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildGasConvectionCoefficient"></a>

### *property* AMBuildSettings.BuildGasConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildGasTemperature"></a>

### *property* AMBuildSettings.BuildGasTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildPowderConvectionCoefficient"></a>

### *property* AMBuildSettings.BuildPowderConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildPowderTemperature"></a>

### *property* AMBuildSettings.BuildPowderTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildPowderTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownGasConvectionCoefficient"></a>

### *property* AMBuildSettings.CooldownGasConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownGasTemperature"></a>

### *property* AMBuildSettings.CooldownGasTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownPowderConvectionCoefficient"></a>

### *property* AMBuildSettings.CooldownPowderConvectionCoefficient *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownPowderTemperature"></a>

### *property* AMBuildSettings.CooldownPowderTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownPowderTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DepositionThickness"></a>

### *property* AMBuildSettings.DepositionThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DepositionThickness.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DwellTime"></a>

### *property* AMBuildSettings.DwellTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DwellTime.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.HatchSpacing"></a>

### *property* AMBuildSettings.HatchSpacing *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HatchSpacing.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.LayerHeightValue"></a>

### *property* AMBuildSettings.LayerHeightValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LayerHeightValue.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PreheatTemperature"></a>

### *property* AMBuildSettings.PreheatTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreheatTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.RoomTemperature"></a>

### *property* AMBuildSettings.RoomTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RoomTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanSpeed"></a>

### *property* AMBuildSettings.ScanSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildGasOrPowderTemperatureType"></a>

### *property* AMBuildSettings.BuildGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../Mechanical/DataModel/Enums/AMProcessSettingsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildMachineType"></a>

### *property* AMBuildSettings.BuildMachineType *: [Ansys.Mechanical.DataModel.Enums.AMBuildMachineType](../../../../Mechanical/DataModel/Enums/AMBuildMachineType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMBuildMachineType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BuildMachineType.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownGasOrPowderTemperatureType"></a>

### *property* AMBuildSettings.CooldownGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../Mechanical/DataModel/Enums/AMProcessSettingsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CooldownGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.HeatingDuration"></a>

### *property* AMBuildSettings.HeatingDuration *: [Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType](../../../../Mechanical/DataModel/Enums/AMHeatingDurationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatingDuration.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.HeatingMethod"></a>

### *property* AMBuildSettings.HeatingMethod *: [Ansys.Mechanical.DataModel.Enums.AMHeatingMethod](../../../../Mechanical/DataModel/Enums/AMHeatingMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMHeatingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InherentStrainDefinition"></a>

### *property* AMBuildSettings.InherentStrainDefinition *: [Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition](../../../../Mechanical/DataModel/Enums/AMInherentStrainDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InherentStrainDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.MachineLearningModel"></a>

### *property* AMBuildSettings.MachineLearningModel *: [Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel](../../../../Mechanical/DataModel/Enums/AMMachineLearningModel.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MachineLearningModel.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AdditiveProcess"></a>

### *property* AMBuildSettings.AdditiveProcess *: [Ansys.Mechanical.DataModel.Enums.AMProcessType](../../../../Mechanical/DataModel/Enums/AMProcessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AdditiveProcess.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanPatternDefinition"></a>

### *property* AMBuildSettings.ScanPatternDefinition *: [Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition](../../../../Mechanical/DataModel/Enums/AMScanPatternDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScanPatternDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ThermalStrainMethod"></a>

### *property* AMBuildSettings.ThermalStrainMethod *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod](../../../../Mechanical/DataModel/Enums/AMThermalStrainMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainMethod.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InherentStrain"></a>

### *property* AMBuildSettings.InherentStrain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InherentStrain.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DataModelObjectCategory"></a>

### *property* AMBuildSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Children"></a>

### *property* AMBuildSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Comments"></a>

### *property* AMBuildSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Figures"></a>

### *property* AMBuildSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Images"></a>

### *property* AMBuildSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AMBuildSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Properties"></a>

### *property* AMBuildSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.VisibleProperties"></a>

### *property* AMBuildSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMBuildSettings.SaveBuildSettings"></a>

### AMBuildSettings.SaveBuildSettings(fName: System.String)

Run the SaveBuildSettings action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.LoadBuildSettings"></a>

### AMBuildSettings.LoadBuildSettings(fName: System.String)

Run the LoadBuildSettings action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ResetToDefault"></a>

### AMBuildSettings.ResetToDefault()

ResetToDefault - Restores default values of all properties.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Delete"></a>

### AMBuildSettings.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetChildren"></a>

### AMBuildSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AMBuildSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AddComment"></a>

### AMBuildSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AddFigure"></a>

### AMBuildSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AddImage"></a>

### AMBuildSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Activate"></a>

### AMBuildSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CopyTo"></a>

### AMBuildSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Duplicate"></a>

### AMBuildSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GroupAllSimilarChildren"></a>

### AMBuildSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GroupSimilarObjects"></a>

### AMBuildSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PropertyByName"></a>

### AMBuildSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PropertyByAPIName"></a>

### AMBuildSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CreateParameter"></a>

### AMBuildSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetParameter"></a>

### AMBuildSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.RemoveParameter"></a>

### AMBuildSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

