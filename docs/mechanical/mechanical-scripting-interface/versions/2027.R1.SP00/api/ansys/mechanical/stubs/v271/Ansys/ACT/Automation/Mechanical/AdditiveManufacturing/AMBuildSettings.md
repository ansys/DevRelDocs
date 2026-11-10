# `AMBuildSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSettings(internalObject: Any)

<a id="AMBuildSettings"></a>

### *class* AMBuildSettings(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AMBuildSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AMBuildSettings.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#AMBuildSettings.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#AMBuildSettings.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#AMBuildSettings.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#AMBuildSettings.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AMBuildSettings.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AMBuildSettings.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AMBuildSettings.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`CreateStrainScalingFactorTable`](#AMBuildSettings.CreateStrainScalingFactorTable) | Creates a new AM strain scaling factor table.                                               |
| [`Cut`](#AMBuildSettings.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AMBuildSettings.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#AMBuildSettings.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AMBuildSettings.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#AMBuildSettings.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AMBuildSettings.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#AMBuildSettings.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AMBuildSettings.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AMBuildSettings.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#AMBuildSettings.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#AMBuildSettings.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AMBuildSettings.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AMBuildSettings.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#AMBuildSettings.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AMBuildSettings.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#AMBuildSettings.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AMBuildSettings.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AMBuildSettings.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AMBuildSettings.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AMBuildSettings.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AMBuildSettings.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AMBuildSettings.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AMBuildSettings.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AMBuildSettings.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`LoadBuildSettings`](#AMBuildSettings.LoadBuildSettings)                           | Run the LoadBuildSettings action.                                                           |
| [`Paste`](#AMBuildSettings.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AMBuildSettings.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#AMBuildSettings.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#AMBuildSettings.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AMBuildSettings.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AMBuildSettings.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`ResetToDefault`](#AMBuildSettings.ResetToDefault)                                 | ResetToDefault - Restores default values of all properties.                                 |
| [`SaveBuildSettings`](#AMBuildSettings.SaveBuildSettings)                           | Run the SaveBuildSettings action.                                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ASCParallel`](#AMBuildSettings.ASCParallel)                                                         | Gets or sets the ASCParallel.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`ASCPerpendicular`](#AMBuildSettings.ASCPerpendicular)                                               | Gets or sets the ASCPerpendicular.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`ASCVertical`](#AMBuildSettings.ASCVertical)                                                         | Gets or sets the ASCVertical.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`Absorptivity`](#AMBuildSettings.Absorptivity)                                                       | Gets or sets the Absorptivity.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`AdditiveProcess`](#AMBuildSettings.AdditiveProcess)                                                 | Gets or sets the AdditiveProcess.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`AttachedRefs`](#AMBuildSettings.AttachedRefs)                                                       | AttachedRefs property.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`BeamDiameter`](#AMBuildSettings.BeamDiameter)                                                       | Gets or sets the beam diameter.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`BeamPower`](#AMBuildSettings.BeamPower)                                                             | Gets or sets the beam power.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`BuildGasConvectionCoefficient`](#AMBuildSettings.BuildGasConvectionCoefficient)                     | Gets or sets the BuildGasConvectionCoefficient.                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`BuildGasOrPowderTemperatureType`](#AMBuildSettings.BuildGasOrPowderTemperatureType)                 | Gets or sets the BuildGasOrPowderTemperatureType.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`BuildGasTemperature`](#AMBuildSettings.BuildGasTemperature)                                         | Gets or sets the BuildGasTemperature.                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`BuildMachineType`](#AMBuildSettings.BuildMachineType)                                               | Gets or sets the BuildMachineType.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`BuildPowderConvectionCoefficient`](#AMBuildSettings.BuildPowderConvectionCoefficient)               | Gets or sets the BuildPowderConvectionCoefficient.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`BuildPowderTemperature`](#AMBuildSettings.BuildPowderTemperature)                                   | Gets or sets the BuildPowderTemperature.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`BuildRadiationEmissivity`](#AMBuildSettings.BuildRadiationEmissivity)                               | Gets or sets the radiation emissivity for the build phase. If the input value is outside the accepted range of 0–1,                                                                                                                                                                                                                                                                                                                                |
| [`BuildRoomTemperature`](#AMBuildSettings.BuildRoomTemperature)                                       | Gets or sets the ambient gas temperature in the chamber during printing. Used as the ambient reference for convection and radiation on all active clusters and base surfaces during the build. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0 °C.                                                                                                |
| [`BuildSequence`](#AMBuildSettings.BuildSequence)                                                     | Gets the build sequence. An exception is thrown if the EnableBuildSequence property is False.                                                                                                                                                                                                                                                                                                                                                      |
| [`BuildUseRadiationBC`](#AMBuildSettings.BuildUseRadiationBC)                                         | Gets or sets whether to use the radiation boundary condition during the build phase.                                                                                                                                                                                                                                                                                                                                                               |
| [`Children`](#AMBuildSettings.Children)                                                               | Gets the list of children.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`ClsId`](#AMBuildSettings.ClsId)                                                                     | ClsId property.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`Comments`](#AMBuildSettings.Comments)                                                               | Gets the list of associated comments.                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`CooldownGasConvectionCoefficient`](#AMBuildSettings.CooldownGasConvectionCoefficient)               | Gets or sets the CooldownGasConvectionCoefficient.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`CooldownGasOrPowderTemperatureType`](#AMBuildSettings.CooldownGasOrPowderTemperatureType)           | Gets or sets the CooldownGasOrPowderTemperatureType.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CooldownGasTemperature`](#AMBuildSettings.CooldownGasTemperature)                                   | Gets or sets the CooldownGasTemperature.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`CooldownPowderConvectionCoefficient`](#AMBuildSettings.CooldownPowderConvectionCoefficient)         | Gets or sets the CooldownPowderConvectionCoefficient.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`CooldownPowderTemperature`](#AMBuildSettings.CooldownPowderTemperature)                             | Gets or sets the CooldownPowderTemperature.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`CooldownRadiationEmissivity`](#AMBuildSettings.CooldownRadiationEmissivity)                         | Gets or sets the radiation emissivity for the cool down phase. If the input value is outside the accepted range of 0–1,                                                                                                                                                                                                                                                                                                                            |
| [`CooldownRoomTemperature`](#AMBuildSettings.CooldownRoomTemperature)                                 | Gets or sets the ambient gas temperature in the chamber during cooldown. Used as the ambient reference for convection and radiation on all active clusters and base surfaces during the build. An exception is thrown if the supplied value is less than or equal to 0 °C.                                                                                                                                                                         |
| [`CooldownTime`](#AMBuildSettings.CooldownTime)                                                       | Gets or sets the duration of the cooldown process. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than 0.                                                                                                                                                                                                                                                           |
| [`CooldownUseRadiationBC`](#AMBuildSettings.CooldownUseRadiationBC)                                   | Gets or sets whether to use the radiation boundary condition during the cool down phase.                                                                                                                                                                                                                                                                                                                                                           |
| [`DEDBuildGasConvectionCoefficientBase`](#AMBuildSettings.DEDBuildGasConvectionCoefficientBase)       | Gets or sets the convection coefficient from base plate outer surfaces to chamber gas during printing. Controls how strongly the base plate acts as a heat sink. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.                                                                                                                                                     |
| [`DEDBuildGasConvectionCoefficientPart`](#AMBuildSettings.DEDBuildGasConvectionCoefficientPart)       | Gets or sets the convection coefficient from build surfaces to chamber gas during printing. Automatically applied to each activated cluster. Low values approximate adiabatic conditions; higher values increase cooling, especially important for bulky structures. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.                                                 |
| [`DEDBuildRadiationEmissivityBase`](#AMBuildSettings.DEDBuildRadiationEmissivityBase)                 | Gets or sets the emissivity of base plate surfaces during build. Changes how strongly the base plate exchanges heat radiatively with the environment. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.                                                                                                                   |
| [`DEDBuildRadiationEmissivityPart`](#AMBuildSettings.DEDBuildRadiationEmissivityPart)                 | Gets or sets the emissivity of build surfaces during build. Higher values increase radiative heat loss from the printed part. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.                                                                                                                                           |
| [`DEDClusterCoolingTimeRatio`](#AMBuildSettings.DEDClusterCoolingTimeRatio)                           | Gets or sets the ratio defining the cooling portion of total cluster time. Lower values shorten cooling and lengthen effective heating, increasing temperature spikes. A value of 0.8 means ~20 % of cluster time is heating and ~80 % is cooling. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than or equal to 0, or greater than 1.          |
| [`DEDCooldownGasConvectionCoefficientBase`](#AMBuildSettings.DEDCooldownGasConvectionCoefficientBase) | Gets or sets the convection coefficient from base plate surfaces to chamber gas during cooldown. Governs how quickly the base plate returns to ambient conditions. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.                                                                                                                                                   |
| [`DEDCooldownGasConvectionCoefficientPart`](#AMBuildSettings.DEDCooldownGasConvectionCoefficientPart) | Gets or sets the convection coefficient from build surfaces to chamber gas during cooldown. Higher values increase cooling after deposition stops; very low values can nearly disable convection for sensitivity studies. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.                                                                                            |
| [`DEDCooldownRadiationEmissivityBase`](#AMBuildSettings.DEDCooldownRadiationEmissivityBase)           | Gets or sets the emissivity of base plate surfaces during cooldown. Changes how strongly the base plate exchanges heat radiatively with the environment. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.                                                                                                                |
| [`DEDCooldownRadiationEmissivityPart`](#AMBuildSettings.DEDCooldownRadiationEmissivityPart)           | Gets or sets the emissivity of build surfaces during cooldown. Higher values increase radiative heat loss from the printed part. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.                                                                                                                                        |
| [`DEDMaterialDepositionRate`](#AMBuildSettings.DEDMaterialDepositionRate)                             | Gets or sets the material feed rate in volume per time unit determined by layer thickness × weld width × deposition speed. Along with Cluster Volume, it defines cluster time (volume ÷ deposition rate). An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than or equal to 0.                                                                      |
| [`DataModelObjectCategory`](#AMBuildSettings.DataModelObjectCategory)                                 | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`DepositionThickness`](#AMBuildSettings.DepositionThickness)                                         | Gets or sets the DepositionThickness.                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`DwellTime`](#AMBuildSettings.DwellTime)                                                             | Gets or sets the DwellTime.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`DwellTimeMultiple`](#AMBuildSettings.DwellTimeMultiple)                                             | Gets or sets the DwellTimeMultiple.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`EnableBuildSequence`](#AMBuildSettings.EnableBuildSequence)                                         | Gets or sets the EnableBuildSequence flag. This flag must be set to enable the Build Sequence Definition properties. [Default = False]                                                                                                                                                                                                                                                                                                             |
| [`Figures`](#AMBuildSettings.Figures)                                                                 | Gets the list of associated figures.                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GeneratedLayerRotationAngle`](#AMBuildSettings.GeneratedLayerRotationAngle)                         | Gets or sets the generated layer rotation angle.                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GeneratedStartLayerAngle`](#AMBuildSettings.GeneratedStartLayerAngle)                               | Gets or sets the generated start layer angle.                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GroupingFolder`](#AMBuildSettings.GroupingFolder)                                                   | GroupingFolder property.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`HatchSpacing`](#AMBuildSettings.HatchSpacing)                                                       | Gets or sets the HatchSpacing.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HeatingDuration`](#AMBuildSettings.HeatingDuration)                                                 | Gets or sets the HeatingDuration.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`HeatingMethod`](#AMBuildSettings.HeatingMethod)                                                     | Gets or sets the HeatingMethod.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`IconName`](#AMBuildSettings.IconName)                                                               | IconName property.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`Images`](#AMBuildSettings.Images)                                                                   | Gets the list of associated images.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`InherentStrain`](#AMBuildSettings.InherentStrain)                                                   | Gets or sets the InherentStrain.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`InherentStrainDefinition`](#AMBuildSettings.InherentStrainDefinition)                               | Gets or sets the InherentStrainDefinition.                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`InternalObject`](#AMBuildSettings.InternalObject)                                                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`InterpassCoolingConvergenceThreshold`](#AMBuildSettings.InterpassCoolingConvergenceThreshold)       | Gets or sets the maximum allowed percent change in the layer's maximum temperature between iterations. Cooling is considered converged when the change is less than or equal to this value. Default is 0.1 (10%). Available when the interpass cooling method is set to TemperatureBased. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than 0, or greater than 1. |
| [`InterpassCoolingMaxIterationNumLayer`](#AMBuildSettings.InterpassCoolingMaxIterationNumLayer)       | Gets or sets the upper limit on the number of cooling iterations per layer when using TemperatureBased interpass cooling method. Default is 5. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than 1.                                                                                                                                                               |
| [`InterpassCoolingMethod`](#AMBuildSettings.InterpassCoolingMethod)                                   | Gets or sets the method used to control dwell time between layers. Applicable only when AMProcessType property is DirectedEnergyDeposition.                                                                                                                                                                                                                                                                                                        |
| [`InterpassCoolingTargetTemperature`](#AMBuildSettings.InterpassCoolingTargetTemperature)             | Gets or sets the temperature that a layer must cool to before the next layer begins. Available when the interpass cooling method is set to TemperatureBased. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0 °C.                                                                                                                                  |
| [`InterpassCoolingTimeStepSize`](#AMBuildSettings.InterpassCoolingTimeStepSize)                       | Gets or sets the time increment between repeated thermal solves while cooling a layer in TemperatureBased interpass cooling method. Smaller values give finer control but require more solves. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0.                                                                                                   |
| [`LayerHeightType`](#AMBuildSettings.LayerHeightType)                                                 | LayerHeightType - Get/Sets the layer height type.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`LayerHeightValue`](#AMBuildSettings.LayerHeightValue)                                               | Gets or sets the LayerHeightValue.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`MachineLearningModel`](#AMBuildSettings.MachineLearningModel)                                       | Gets or sets the MachineLearningModel.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`Name`](#AMBuildSettings.Name)                                                                       | Name property.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`NumberOfHeatSources`](#AMBuildSettings.NumberOfHeatSources)                                         | Gets or sets the NumberOfHeatSources.                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`ObjectId`](#AMBuildSettings.ObjectId)                                                               | ObjectId property.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`ObjectState`](#AMBuildSettings.ObjectState)                                                         | ObjectState property.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`ObjectTags`](#AMBuildSettings.ObjectTags)                                                           | ObjectTags property.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`Parent`](#AMBuildSettings.Parent)                                                                   | Parent property.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`PowderPropertyFactor`](#AMBuildSettings.PowderPropertyFactor)                                       | Gets or sets the PowderPropertyFactor.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`PreheatDuringPrinting`](#AMBuildSettings.PreheatDuringPrinting)                                     | Gets or set whether to apply a temperature boundary condition throughout the entire build. When set to False, the boundary condition is applied only in the first load step; When set to True, the boundary condition is maintained during all cluster activations. Default: False. Applicable only when AMProcessType property is DirectedEnergyDeposition.                                                                                       |
| [`PreheatGeometry`](#AMBuildSettings.PreheatGeometry)                                                 | Gets or sets the preheat geometry scoping. Applicable only when AdditiveProcess is DirectedEnergyDeposition and PreheatDuringPrinting is On. Otherwise, an exception is thrown.                                                                                                                                                                                                                                                                    |
| [`PreheatTemperature`](#AMBuildSettings.PreheatTemperature)                                           | Gets or sets the preheat temperature on the build plate. An exception is thrown if the supplied value is less than or equal to 0 °C.                                                                                                                                                                                                                                                                                                               |
| [`ProcessTemperature`](#AMBuildSettings.ProcessTemperature)                                           | Gets or sets the temperature of the feed material as it is exiting the nozzle—usually melting temperature or above. This value automatically defaults to the build material's melting temperature (or 1000 °C if the melting temperature is not defined). Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0 °C.                                     |
| [`Properties`](#AMBuildSettings.Properties)                                                           | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`RemovalStep`](#AMBuildSettings.RemovalStep)                                                         | Gets or sets whether to perform base removal after cooldown. Default: False. Applicable only when the AMProcessType property is set to DirectedEnergyDeposition.                                                                                                                                                                                                                                                                                   |
| [`RoomTemperature`](#AMBuildSettings.RoomTemperature)                                                 | Gets or sets the RoomTemperature.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`ScanPatternBuildFilePath`](#AMBuildSettings.ScanPatternBuildFilePath)                               | Gets or sets the ScanPatternBuildFilePath.                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`ScanPatternDefinition`](#AMBuildSettings.ScanPatternDefinition)                                     | Gets or sets the ScanPatternDefinition.                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`ScanSpeed`](#AMBuildSettings.ScanSpeed)                                                             | Gets or sets the ScanSpeed.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`ScanStripeWidth`](#AMBuildSettings.ScanStripeWidth)                                                 | Gets or sets the scan stripe width.                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`State`](#AMBuildSettings.State)                                                                     | State property.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`StrainScalingFactor`](#AMBuildSettings.StrainScalingFactor)                                         | Gets or sets the StrainScalingFactor.                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`StrainScalingFactorDefinition`](#AMBuildSettings.StrainScalingFactorDefinition)                     | Gets the StrainScalingFactorDefinition.                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`StrainScalingFactorInterpolationMethod`](#AMBuildSettings.StrainScalingFactorInterpolationMethod)   | StrainScalingFactorInterpolationMethod property.                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`StrainScalingFactorX`](#AMBuildSettings.StrainScalingFactorX)                                       | Gets or sets the StrainScalingFactorX.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`StrainScalingFactorXDefinition`](#AMBuildSettings.StrainScalingFactorXDefinition)                   | Gets the StrainScalingFactorXDefinition.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`StrainScalingFactorXInterpolationMethod`](#AMBuildSettings.StrainScalingFactorXInterpolationMethod) | StrainScalingFactorXInterpolationMethod property.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`StrainScalingFactorY`](#AMBuildSettings.StrainScalingFactorY)                                       | Gets or sets the StrainScalingFactorY.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`StrainScalingFactorYDefinition`](#AMBuildSettings.StrainScalingFactorYDefinition)                   | Gets the StrainScalingFactorYDefinition.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`StrainScalingFactorYInterpolationMethod`](#AMBuildSettings.StrainScalingFactorYInterpolationMethod) | StrainScalingFactorYInterpolationMethod property.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`StrainScalingFactorZ`](#AMBuildSettings.StrainScalingFactorZ)                                       | Gets or sets the StrainScalingFactorZ.                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`StrainScalingFactorZDefinition`](#AMBuildSettings.StrainScalingFactorZDefinition)                   | Gets the StrainScalingFactorZDefinition.                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`StrainScalingFactorZInterpolationMethod`](#AMBuildSettings.StrainScalingFactorZInterpolationMethod) | StrainScalingFactorZInterpolationMethod property.                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`ThermalStrainMaterialModel`](#AMBuildSettings.ThermalStrainMaterialModel)                           | Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods.                                                                                                                                                                                                                                                                                                                                                     |
| [`ThermalStrainMethod`](#AMBuildSettings.ThermalStrainMethod)                                         | Gets or sets the ThermalStrainMethod.                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`ThermalStrainScalingFactor`](#AMBuildSettings.ThermalStrainScalingFactor)                           | Gets or sets the ThermalStrainScalingFactor.                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`VisibleProperties`](#AMBuildSettings.VisibleProperties)                                             | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="AMBuildSettings.ASCParallel"></a>

### *property* AMBuildSettings.ASCParallel *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ASCParallel.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ASCPerpendicular"></a>

### *property* AMBuildSettings.ASCPerpendicular *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ASCPerpendicular.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ASCVertical"></a>

### *property* AMBuildSettings.ASCVertical *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ASCVertical.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Absorptivity"></a>

### *property* AMBuildSettings.Absorptivity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Absorptivity.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AdditiveProcess"></a>

### *property* AMBuildSettings.AdditiveProcess *: [Ansys.Mechanical.DataModel.Enums.AMProcessType](../../../../Mechanical/DataModel/Enums/AMProcessType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMProcessType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AdditiveProcess.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AttachedRefs"></a>

### *property* AMBuildSettings.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BeamDiameter"></a>

### *property* AMBuildSettings.BeamDiameter *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the beam diameter.

The type for the setter can be either double or Quantity.
Support for double is deprecated and will be removed in a future release.
The type returned by the getter is a Quantity.

An exception will be thrown for unsupported types.

An exception will be thrown if the value is less than or equal to 0 with inherent strain disabled.

An exception will be thrown if the value is less than 0.00002 or greater than 0.00014 meters when
inherent strain is enabled and the inherent strain definition is Thermal Strain.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BeamPower"></a>

### *property* AMBuildSettings.BeamPower *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the beam power.

The type for the setter can be either double or Quantity.
Support for double is deprecated and will be removed in a future release.
The type returned by the getter is a Quantity.

An exception will be thrown for unsupported types.

An exception  will be thrown if the value is less than or equal to 0 with inherent strain disabled.

An exception  will be thrown if the value is less than 50 or greater than 700 watts when
inherent strain is enabled and the inherent strain definition is Thermal Strain.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildGasConvectionCoefficient"></a>

### *property* AMBuildSettings.BuildGasConvectionCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BuildGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildGasOrPowderTemperatureType"></a>

### *property* AMBuildSettings.BuildGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../Mechanical/DataModel/Enums/AMProcessSettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BuildGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildGasTemperature"></a>

### *property* AMBuildSettings.BuildGasTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BuildGasTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildMachineType"></a>

### *property* AMBuildSettings.BuildMachineType *: [Ansys.Mechanical.DataModel.Enums.AMBuildMachineType](../../../../Mechanical/DataModel/Enums/AMBuildMachineType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMBuildMachineType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BuildMachineType.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildPowderConvectionCoefficient"></a>

### *property* AMBuildSettings.BuildPowderConvectionCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BuildPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildPowderTemperature"></a>

### *property* AMBuildSettings.BuildPowderTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BuildPowderTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildRadiationEmissivity"></a>

### *property* AMBuildSettings.BuildRadiationEmissivity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radiation emissivity for the build phase. If the input value is outside the accepted range of 0–1,
: an ArgumentOutOfRangeException is thrown. An InvalidOperationException is also thrown if BuildUseRadiationBC is set to false.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildRoomTemperature"></a>

### *property* AMBuildSettings.BuildRoomTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ambient gas temperature in the chamber during printing. Used as the ambient reference for convection and radiation on all active clusters and base surfaces during the build. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0 °C.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildSequence"></a>

### *property* AMBuildSettings.BuildSequence *: [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequence](AMBuildSequence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequence) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the build sequence. An exception is thrown if the EnableBuildSequence property is False.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.BuildUseRadiationBC"></a>

### *property* AMBuildSettings.BuildUseRadiationBC *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use the radiation boundary condition during the build phase.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Children"></a>

### *property* AMBuildSettings.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ClsId"></a>

### *property* AMBuildSettings.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Comments"></a>

### *property* AMBuildSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownGasConvectionCoefficient"></a>

### *property* AMBuildSettings.CooldownGasConvectionCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CooldownGasConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownGasOrPowderTemperatureType"></a>

### *property* AMBuildSettings.CooldownGasOrPowderTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType](../../../../Mechanical/DataModel/Enums/AMProcessSettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMProcessSettingsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CooldownGasOrPowderTemperatureType.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownGasTemperature"></a>

### *property* AMBuildSettings.CooldownGasTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CooldownGasTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownPowderConvectionCoefficient"></a>

### *property* AMBuildSettings.CooldownPowderConvectionCoefficient *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CooldownPowderConvectionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownPowderTemperature"></a>

### *property* AMBuildSettings.CooldownPowderTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CooldownPowderTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownRadiationEmissivity"></a>

### *property* AMBuildSettings.CooldownRadiationEmissivity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radiation emissivity for the cool down phase. If the input value is outside the accepted range of 0–1,
: an ArgumentOutOfRangeException is thrown. An InvalidOperationException is also thrown if CooldownUseRadiationBC is set to false.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownRoomTemperature"></a>

### *property* AMBuildSettings.CooldownRoomTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ambient gas temperature in the chamber during cooldown. Used as the ambient reference for convection and radiation on all active clusters and base surfaces during the build. An exception is thrown if the supplied value is less than or equal to 0 °C.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownTime"></a>

### *property* AMBuildSettings.CooldownTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the duration of the cooldown process. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CooldownUseRadiationBC"></a>

### *property* AMBuildSettings.CooldownUseRadiationBC *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use the radiation boundary condition during the cool down phase.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDBuildGasConvectionCoefficientBase"></a>

### *property* AMBuildSettings.DEDBuildGasConvectionCoefficientBase *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the convection coefficient from base plate outer surfaces to chamber gas during printing. Controls how strongly the base plate acts as a heat sink. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDBuildGasConvectionCoefficientPart"></a>

### *property* AMBuildSettings.DEDBuildGasConvectionCoefficientPart *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the convection coefficient from build surfaces to chamber gas during printing. Automatically applied to each activated cluster. Low values approximate adiabatic conditions; higher values increase cooling, especially important for bulky structures. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDBuildRadiationEmissivityBase"></a>

### *property* AMBuildSettings.DEDBuildRadiationEmissivityBase *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the emissivity of base plate surfaces during build. Changes how strongly the base plate exchanges heat radiatively with the environment. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDBuildRadiationEmissivityPart"></a>

### *property* AMBuildSettings.DEDBuildRadiationEmissivityPart *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the emissivity of build surfaces during build. Higher values increase radiative heat loss from the printed part. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDClusterCoolingTimeRatio"></a>

### *property* AMBuildSettings.DEDClusterCoolingTimeRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ratio defining the cooling portion of total cluster time. Lower values shorten cooling and lengthen effective heating, increasing temperature spikes. A value of 0.8 means ~20 % of cluster time is heating and ~80 % is cooling. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than or equal to 0, or greater than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDCooldownGasConvectionCoefficientBase"></a>

### *property* AMBuildSettings.DEDCooldownGasConvectionCoefficientBase *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the convection coefficient from base plate surfaces to chamber gas during cooldown. Governs how quickly the base plate returns to ambient conditions. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDCooldownGasConvectionCoefficientPart"></a>

### *property* AMBuildSettings.DEDCooldownGasConvectionCoefficientPart *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the convection coefficient from build surfaces to chamber gas during cooldown. Higher values increase cooling after deposition stops; very low values can nearly disable convection for sensitivity studies. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition or if the supplied value is less than 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDCooldownRadiationEmissivityBase"></a>

### *property* AMBuildSettings.DEDCooldownRadiationEmissivityBase *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the emissivity of base plate surfaces during cooldown. Changes how strongly the base plate exchanges heat radiatively with the environment. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDCooldownRadiationEmissivityPart"></a>

### *property* AMBuildSettings.DEDCooldownRadiationEmissivityPart *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the emissivity of build surfaces during cooldown. Higher values increase radiative heat loss from the printed part. An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than 0, or greater than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DEDMaterialDepositionRate"></a>

### *property* AMBuildSettings.DEDMaterialDepositionRate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the material feed rate in volume per time unit determined by layer thickness × weld width × deposition speed. Along with Cluster Volume, it defines cluster time (volume ÷ deposition rate). An exception is thrown if the AMProcessType property is not DirectedEnergyDeposition. An exception is also thrown if the supplied value is less than or equal to 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DataModelObjectCategory"></a>

### *property* AMBuildSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DepositionThickness"></a>

### *property* AMBuildSettings.DepositionThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DepositionThickness.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DwellTime"></a>

### *property* AMBuildSettings.DwellTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DwellTime.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.DwellTimeMultiple"></a>

### *property* AMBuildSettings.DwellTimeMultiple *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DwellTimeMultiple.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.EnableBuildSequence"></a>

### *property* AMBuildSettings.EnableBuildSequence *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnableBuildSequence flag. This flag must be set to enable the Build Sequence Definition properties. [Default = False]

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Figures"></a>

### *property* AMBuildSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GeneratedLayerRotationAngle"></a>

### *property* AMBuildSettings.GeneratedLayerRotationAngle *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the generated layer rotation angle.

The type for the setter can be either double or Quantity.
Support for double is deprecated and will be removed in a future release.
The type returned by the getter is a Quantity.

An exception will be thrown for unsupported types.

An exception will be thrown if the value is less than 0 or greater than 180 degrees.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GeneratedStartLayerAngle"></a>

### *property* AMBuildSettings.GeneratedStartLayerAngle *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the generated start layer angle.

The type for the setter can be either double or Quantity.
Support for double is deprecated and will be removed in a future release.
The type returned by the getter is a Quantity.

An exception will be thrown for unsupported types.

An exception will be thrown if the value is less than 0 or greater than 180 degrees.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GroupingFolder"></a>

### *property* AMBuildSettings.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.HatchSpacing"></a>

### *property* AMBuildSettings.HatchSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HatchSpacing.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.HeatingDuration"></a>

### *property* AMBuildSettings.HeatingDuration *: [Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType](../../../../Mechanical/DataModel/Enums/AMHeatingDurationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMHeatingDurationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HeatingDuration.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.HeatingMethod"></a>

### *property* AMBuildSettings.HeatingMethod *: [Ansys.Mechanical.DataModel.Enums.AMHeatingMethod](../../../../Mechanical/DataModel/Enums/AMHeatingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMHeatingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HeatingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.IconName"></a>

### *property* AMBuildSettings.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Images"></a>

### *property* AMBuildSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InherentStrain"></a>

### *property* AMBuildSettings.InherentStrain *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InherentStrain.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InherentStrainDefinition"></a>

### *property* AMBuildSettings.InherentStrainDefinition *: [Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition](../../../../Mechanical/DataModel/Enums/AMInherentStrainDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMInherentStrainDefinition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InherentStrainDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InternalObject"></a>

### *property* AMBuildSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSettingsAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InterpassCoolingConvergenceThreshold"></a>

### *property* AMBuildSettings.InterpassCoolingConvergenceThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum allowed percent change in the layer's maximum temperature between iterations. Cooling is considered converged when the change is less than or equal to this value. Default is 0.1 (10%). Available when the interpass cooling method is set to TemperatureBased. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than 0, or greater than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InterpassCoolingMaxIterationNumLayer"></a>

### *property* AMBuildSettings.InterpassCoolingMaxIterationNumLayer *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the upper limit on the number of cooling iterations per layer when using TemperatureBased interpass cooling method. Default is 5. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than 1.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InterpassCoolingMethod"></a>

### *property* AMBuildSettings.InterpassCoolingMethod *: [Ansys.Mechanical.DataModel.Enums.AMInterpassCoolingMethod](../../../../Mechanical/DataModel/Enums/AMInterpassCoolingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMInterpassCoolingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the method used to control dwell time between layers. Applicable only when AMProcessType property is DirectedEnergyDeposition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InterpassCoolingTargetTemperature"></a>

### *property* AMBuildSettings.InterpassCoolingTargetTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the temperature that a layer must cool to before the next layer begins. Available when the interpass cooling method is set to TemperatureBased. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0 °C.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InterpassCoolingTimeStepSize"></a>

### *property* AMBuildSettings.InterpassCoolingTimeStepSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the time increment between repeated thermal solves while cooling a layer in TemperatureBased interpass cooling method. Smaller values give finer control but require more solves. Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.LayerHeightType"></a>

### *property* AMBuildSettings.LayerHeightType *: [Ansys.Mechanical.DataModel.Enums.AMLayerHeightType](../../../../Mechanical/DataModel/Enums/AMLayerHeightType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMLayerHeightType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LayerHeightType - Get/Sets the layer height type.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.LayerHeightValue"></a>

### *property* AMBuildSettings.LayerHeightValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LayerHeightValue.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.MachineLearningModel"></a>

### *property* AMBuildSettings.MachineLearningModel *: [Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel](../../../../Mechanical/DataModel/Enums/AMMachineLearningModel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMMachineLearningModel) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MachineLearningModel.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Name"></a>

### *property* AMBuildSettings.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.NumberOfHeatSources"></a>

### *property* AMBuildSettings.NumberOfHeatSources *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfHeatSources.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ObjectId"></a>

### *property* AMBuildSettings.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ObjectState"></a>

### *property* AMBuildSettings.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ObjectTags"></a>

### *property* AMBuildSettings.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Parent"></a>

### *property* AMBuildSettings.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PowderPropertyFactor"></a>

### *property* AMBuildSettings.PowderPropertyFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PowderPropertyFactor.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PreheatDuringPrinting"></a>

### *property* AMBuildSettings.PreheatDuringPrinting *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or set whether to apply a temperature boundary condition throughout the entire build. When set to False, the boundary condition is applied only in the first load step; When set to True, the boundary condition is maintained during all cluster activations. Default: False. Applicable only when AMProcessType property is DirectedEnergyDeposition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PreheatGeometry"></a>

### *property* AMBuildSettings.PreheatGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the preheat geometry scoping. Applicable only when AdditiveProcess is DirectedEnergyDeposition and PreheatDuringPrinting is On. Otherwise, an exception is thrown.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PreheatTemperature"></a>

### *property* AMBuildSettings.PreheatTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the preheat temperature on the build plate. An exception is thrown if the supplied value is less than or equal to 0 °C.

When AdditiveProcess is PowderBedFusion, it sets the value of the starting temperature of the build plate.

When AdditiveProcess is DirectedEnergyDeposition and PreheatDuringPrinting is On, this temperature is prescribed on the scoped geometry as a boundary condition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ProcessTemperature"></a>

### *property* AMBuildSettings.ProcessTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the temperature of the feed material as it is exiting the nozzle—usually melting temperature or above. This value automatically defaults to the build material's melting temperature (or 1000 °C if the melting temperature is not defined). Applicable only when AMProcessType property is DirectedEnergyDeposition. An exception is thrown if the supplied value is less than or equal to 0 °C.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Properties"></a>

### *property* AMBuildSettings.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.RemovalStep"></a>

### *property* AMBuildSettings.RemovalStep *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to perform base removal after cooldown. Default: False. Applicable only when the AMProcessType property is set to DirectedEnergyDeposition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.RoomTemperature"></a>

### *property* AMBuildSettings.RoomTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RoomTemperature.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanPatternBuildFilePath"></a>

### *property* AMBuildSettings.ScanPatternBuildFilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScanPatternBuildFilePath.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanPatternDefinition"></a>

### *property* AMBuildSettings.ScanPatternDefinition *: [Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition](../../../../Mechanical/DataModel/Enums/AMScanPatternDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMScanPatternDefinition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScanPatternDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanSpeed"></a>

### *property* AMBuildSettings.ScanSpeed *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScanSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ScanStripeWidth"></a>

### *property* AMBuildSettings.ScanStripeWidth *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scan stripe width.

The type for the setter can be either double or Quantity.
Support for double is deprecated and will be removed in a future release.
The type returned by the getter is a Quantity.

An exception will be thrown for unsupported types.

An exception will be thrown if the value is less than 0 with inherent strain disabled.

An exception will be thrown if the value is less than 0.001 or greater than 0.1 meters
when inherent strain is enabled and the inherent strain definition is Thermal Strain.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.State"></a>

### *property* AMBuildSettings.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactor"></a>

### *property* AMBuildSettings.StrainScalingFactor *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StrainScalingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorDefinition"></a>

### *property* AMBuildSettings.StrainScalingFactorDefinition *: Ansys.Mechanical.DataModel.Enums.AMStrainScalingFactorDefinition | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StrainScalingFactorDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorInterpolationMethod"></a>

### *property* AMBuildSettings.StrainScalingFactorInterpolationMethod *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

StrainScalingFactorInterpolationMethod property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorX"></a>

### *property* AMBuildSettings.StrainScalingFactorX *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StrainScalingFactorX.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorXDefinition"></a>

### *property* AMBuildSettings.StrainScalingFactorXDefinition *: Ansys.Mechanical.DataModel.Enums.AMStrainScalingFactorDefinition | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StrainScalingFactorXDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorXInterpolationMethod"></a>

### *property* AMBuildSettings.StrainScalingFactorXInterpolationMethod *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

StrainScalingFactorXInterpolationMethod property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorY"></a>

### *property* AMBuildSettings.StrainScalingFactorY *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StrainScalingFactorY.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorYDefinition"></a>

### *property* AMBuildSettings.StrainScalingFactorYDefinition *: Ansys.Mechanical.DataModel.Enums.AMStrainScalingFactorDefinition | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StrainScalingFactorYDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorYInterpolationMethod"></a>

### *property* AMBuildSettings.StrainScalingFactorYInterpolationMethod *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

StrainScalingFactorYInterpolationMethod property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorZ"></a>

### *property* AMBuildSettings.StrainScalingFactorZ *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StrainScalingFactorZ.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorZDefinition"></a>

### *property* AMBuildSettings.StrainScalingFactorZDefinition *: Ansys.Mechanical.DataModel.Enums.AMStrainScalingFactorDefinition | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StrainScalingFactorZDefinition.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.StrainScalingFactorZInterpolationMethod"></a>

### *property* AMBuildSettings.StrainScalingFactorZInterpolationMethod *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

StrainScalingFactorZInterpolationMethod property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ThermalStrainMaterialModel"></a>

### *property* AMBuildSettings.ThermalStrainMaterialModel *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel](../../../../Mechanical/DataModel/Enums/AMThermalStrainMaterialModel.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMaterialModel) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MachineLearningModel using the deprecated ThermalStrainMaterialModel methods.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ThermalStrainMethod"></a>

### *property* AMBuildSettings.ThermalStrainMethod *: [Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod](../../../../Mechanical/DataModel/Enums/AMThermalStrainMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMThermalStrainMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainMethod.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ThermalStrainScalingFactor"></a>

### *property* AMBuildSettings.ThermalStrainScalingFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThermalStrainScalingFactor.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.VisibleProperties"></a>

### *property* AMBuildSettings.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMBuildSettings.Activate"></a>

### AMBuildSettings.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AddComment"></a>

### AMBuildSettings.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AddFigure"></a>

### AMBuildSettings.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.AddImage"></a>

### AMBuildSettings.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Copy"></a>

### AMBuildSettings.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CopyTo"></a>

### AMBuildSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CreateObjRef"></a>

### AMBuildSettings.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CreateParameter"></a>

### AMBuildSettings.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.CreateStrainScalingFactorTable"></a>

### AMBuildSettings.CreateStrainScalingFactorTable() → [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Table)

Creates a new AM strain scaling factor table.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Cut"></a>

### AMBuildSettings.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Delete"></a>

### AMBuildSettings.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Duplicate"></a>

### AMBuildSettings.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Equals"></a>

### AMBuildSettings.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetAPIName"></a>

### AMBuildSettings.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetAllProperties"></a>

### AMBuildSettings.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetChildren"></a>

### AMBuildSettings.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AMBuildSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetDetailsView"></a>

### AMBuildSettings.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetEnumName"></a>

### AMBuildSettings.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetHashCode"></a>

### AMBuildSettings.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetIconFile"></a>

### AMBuildSettings.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetLifetimeService"></a>

### AMBuildSettings.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetObjectData"></a>

### AMBuildSettings.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetParameter"></a>

### AMBuildSettings.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetPath"></a>

### AMBuildSettings.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetPropertyName"></a>

### AMBuildSettings.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetPropertyValue"></a>

### AMBuildSettings.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetVisibleProperties"></a>

### AMBuildSettings.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GetVisiblePropertyNames"></a>

### AMBuildSettings.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GroupAllSimilarChildren"></a>

### AMBuildSettings.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.GroupSimilarObjects"></a>

### AMBuildSettings.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.InitializeLifetimeService"></a>

### AMBuildSettings.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.IsPropertyEditable"></a>

### AMBuildSettings.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMBuildSettings.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.IsPropertyVisible"></a>

### AMBuildSettings.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AMBuildSettings.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.LoadBuildSettings"></a>

### AMBuildSettings.LoadBuildSettings(fName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the LoadBuildSettings action.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.Paste"></a>

### AMBuildSettings.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PropertyByAPIName"></a>

### AMBuildSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PropertyById"></a>

### AMBuildSettings.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.PropertyByName"></a>

### AMBuildSettings.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.RemoveFromGroup"></a>

### AMBuildSettings.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.RemoveParameter"></a>

### AMBuildSettings.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.ResetToDefault"></a>

### AMBuildSettings.ResetToDefault() → [None](https://docs.python.org/3/builtins/constants.html#None)

ResetToDefault - Restores default values of all properties.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSettings.SaveBuildSettings"></a>

### AMBuildSettings.SaveBuildSettings(fName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SaveBuildSettings action.

<!-- !! processed by numpydoc !! -->

