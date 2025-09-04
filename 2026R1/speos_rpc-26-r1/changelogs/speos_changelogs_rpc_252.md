# Speos RPC Changelog 2025 R2

## Data

- Added [ray_sampling](./../api-reference.md#magnitude) magnitude
- Added [ray_per_pixel](./../api-reference.md#unit) unit

## Material

### Non-homogeneous properties

- Added [non_homogeneous_properties](./../api-reference.md#scenematerialinstance) as new field of the **Scene.MaterialInstance** object
- Added [Scene.MaterialInstance.NonHomogeneousProperties](./../api-reference.md#scenematerialinstancenonhomogeneousproperties) as new object of the **Scene.MaterialInstance** object

## Source

### Ray File source

- Added [has_spectral_data](./../api-reference.md#getrayfileinfo_response) as new field of the **GetRayFileInfo_Response** object

### Thermic source

- Added [thermic_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.ThermicProperties](./../api-reference.md#scenesourceinstancethermicproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.ThermicProperties.EmissiveFacesProperties](./../api-reference.md#scenesourceinstancethermicpropertiesemissivefacesproperties) as new object of the **Scene.SourceInstance.ThermicProperties** object
- Added [Scene.SourceInstance.ThermicProperties.TemperatureFieldProperties](./../api-reference.md#scenesourceinstancethermicpropertiestemperaturefieldproperties) as new object of the **Scene.SourceInstance.ThermicProperties** object
- Added [thermic](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Thermic](./../api-reference.md#sourcetemplatethermic) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Thermic.EmissiveFaces](./../api-reference.md#sourcetemplatethermicemissivefaces) as new object of the **SourceTemplate.Thermic** object
- Added [SourceTemplate.Thermic.TemperatureField](./../api-reference.md#sourcetemplatethermictemperaturefield) as new object of the **SourceTemplate.Thermic** object

### Display source

- Added [display_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.DisplayProperties](./../api-reference.md#scenesourceinstancedisplayproperties) as new object of the **Scene.SourceInstance** object
- Added [display](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Display](./../api-reference.md#sourcetemplatedisplay) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedColorSpace](./../api-reference.md#sourcetemplatepredefinedcolorspace) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedColorSpace.ColorSpaceType](./../api-reference.md#sourcetemplatepredefinedcolorspacecolorspacetype) as new object of the **SourceTemplate.PredefinedColorSpace** object
- Added [SourceTemplate.UserDefinedRGBSpace](./../api-reference.md#sourcetemplateuserdefinedrgbspace) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedWhitePoint](./../api-reference.md#sourcetemplatepredefinedwhitepoint) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedWhitePoint.WhitePointType](./../api-reference.md#sourcetemplatepredefinedwhitepointwhitepointtype) as new object of the **SourceTemplate.PredefinedWhitePoint** object
- Added [SourceTemplate.UserDefinedWhitePoint](./../api-reference.md#sourcetemplateuserdefinedwhitepoint) as new object of the **SourceTemplate** object
- Added [SourceTemplate.SourceDimensions](./../api-reference.md#sourcetemplatesourcedimensions) as new object of the **SourceTemplate** object

### Ambient source: CIE General

- Added [ambient_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties](./../api-reference.md#scenesourceinstanceambientproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties.CieGeneralProperties](./../api-reference.md#scenesourceinstanceambientpropertiesciegeneralproperties) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.ManualSun](./../api-reference.md#scenesourceinstanceambientpropertiesmanualsun) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystem) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem.AutomaticSun](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystemautomaticsun) as new object of the **Scene.SourceInstance.AmbientProperties.SunAxisSystem** object
- Added [ambient](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Ambient](./../api-reference.md#sourcetemplateambient) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Ambient.CieGeneral](./../api-reference.md#sourcetemplateambientciegeneral) as new object of the **SourceTemplate.Ambient** object
- Added [SourceTemplate.Ambient.CieGeneral.CieType](./../api-reference.md#sourcetemplateambientciegeneralcietype) as new object of the **SourceTemplate.Ambient.CieGeneral** object
- Added [ground](./../api-reference.md#scene) as new field of the **Scene**
- Added [Scene.GroundPlane](./../api-reference.md#scenegroundplane) as new **Scene** object

### Ambient source: CIE Overcast

- Added [ambient_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties](./../api-reference.md#scenesourceinstanceambientproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties.CieOvercastProperties](./../api-reference.md#scenesourceinstanceambientpropertiescieovercastproperties) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [ambient](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Ambient](./../api-reference.md#sourcetemplateambient) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Ambient.CieOvercast](./../api-reference.md#sourcetemplateambientcieovercast) as new object of the **SourceTemplate.Ambient** object
- Added [ground](./../api-reference.md#scene) as new field of the **Scene**
- Added [Scene.GroundPlane](./../api-reference.md#scenegroundplane) as new **Scene** object

### Ambient source: Environment

- Added [ambient_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties](./../api-reference.md#scenesourceinstanceambientproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties.EnvironmentMapProperties](./../api-reference.md#scenesourceinstanceambientpropertiesenvironmentmapproperties) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [ambient](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Ambient](./../api-reference.md#sourcetemplateambient) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Ambient.EnvironmentMap](./../api-reference.md#sourcetemplateambientenvironmentmap) as new object of the **SourceTemplate.Ambient** object
- Added [SourceTemplate.PredefinedColorSpace](./../api-reference.md#sourcetemplatepredefinedcolorspace) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedColorSpace.ColorSpaceType](./../api-reference.md#sourcetemplatepredefinedcolorspacecolorspacetype) as new object of the **SourceTemplate.PredefinedColorSpace** object
- Added [SourceTemplate.UserDefinedRGBSpace](./../api-reference.md#sourcetemplateuserdefinedrgbspace) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedWhitePoint](./../api-reference.md#sourcetemplatepredefinedwhitepoint) as new object of the **SourceTemplate** object
- Added [SourceTemplate.PredefinedWhitePoint.WhitePointType](./../api-reference.md#sourcetemplatepredefinedwhitepointwhitepointtype) as new object of the **SourceTemplate.PredefinedWhitePoint** object
- Added [SourceTemplate.UserDefinedWhitePoint](./../api-reference.md#sourcetemplateuserdefinedwhitepoint) as new object of the **SourceTemplate** object
- Added [ground](./../api-reference.md#scene) as new field of the **Scene**
- Added [Scene.GroundPlane](./../api-reference.md#scenegroundplane) as new **Scene** object

### Ambient source: Natural Light

- Added [ambient_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties](./../api-reference.md#scenesourceinstanceambientproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties.NaturalLightProperties](./../api-reference.md#scenesourceinstanceambientpropertiesnaturallightproperties) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.ManualSun](./../api-reference.md#scenesourceinstanceambientpropertiesmanualsun) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystem) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem.AutomaticSun](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystemautomaticsun) as new object of the **Scene.SourceInstance.AmbientProperties.SunAxisSystem** object
- Added [ambient](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Ambient](./../api-reference.md#sourcetemplateambient) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Ambient.NaturalLight](./../api-reference.md#sourcetemplateambientnaturallight) as new object of the **SourceTemplate.Ambient** object
- Added [ground](./../api-reference.md#scene) as new field of the **Scene**
- Added [Scene.GroundPlane](./../api-reference.md#scenegroundplane) as new **Scene** object

### Ambient source: Uniform

- Added [ambient_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties](./../api-reference.md#scenesourceinstanceambientproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties.UniformAmbientProperties](./../api-reference.md#scenesourceinstanceambientpropertiesuniformambientproperties) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.ManualSun](./../api-reference.md#scenesourceinstanceambientpropertiesmanualsun) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystem) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem.AutomaticSun](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystemautomaticsun) as new object of the **Scene.SourceInstance.AmbientProperties.SunAxisSystem** object
- Added [ambient](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Ambient](./../api-reference.md#sourcetemplateambient) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Ambient.UniformAmbient](./../api-reference.md#sourcetemplateambientuniformambient) as new object of the **SourceTemplate.Ambient** object
- Added [ground](./../api-reference.md#scene) as new field of the **Scene**
- Added [Scene.GroundPlane](./../api-reference.md#scenegroundplane) as new **Scene** object

### Ambient source: US Standard Atmosphere 1976

- Added [ambient_properties](./../api-reference.md#scenesourceinstance) as new field of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties](./../api-reference.md#scenesourceinstanceambientproperties) as new object of the **Scene.SourceInstance** object
- Added [Scene.SourceInstance.AmbientProperties.UsStandardProperties](./../api-reference.md#scenesourceinstanceambientpropertiesusstandardproperties) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.ManualSun](./../api-reference.md#scenesourceinstanceambientpropertiesmanualsun) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystem) as new object of the **Scene.SourceInstance.AmbientProperties** object
- Added [Scene.SourceInstance.AmbientProperties.SunAxisSystem.AutomaticSun](./../api-reference.md#scenesourceinstanceambientpropertiessunaxissystemautomaticsun) as new object of the **Scene.SourceInstance.AmbientProperties.SunAxisSystem** object
- Added [ambient](./../api-reference.md#sourcetemplate) as new field of the **SourceTemplate** object
- Added [SourceTemplate.Ambient](./../api-reference.md#sourcetemplateambient) as new object of the **SourceTemplate** object
- Added [SourceTemplate.Ambient.UsStandard](./../api-reference.md#sourcetemplateambientusstandard) as new object of the **SourceTemplate.Ambient** object
- Added [ground](./../api-reference.md#scene) as new field of the **Scene**
- Added [Scene.GroundPlane](./../api-reference.md#scenegroundplane) as new **Scene** object

## Sensor

### Intensity sensor

- Added [intensity_properties](./../api-reference.md#scenesensorinstance) as new field of the **Scene.SensorInstance** object
- Added [Scene.SensorInstance.IntensityProperties](./../api-reference.md#scenesensorinstanceintensityproperties) as new object of the **Scene.SensorInstance** object
- Added [intensity_sensor_template](./../api-reference.md#sensortemplate) as new field of the **SensorTemplate** object
- Added [SensorTemplate.Intensity](./../api-reference.md#sensortemplateintensity) as new object of the **SensorTemplate** object
- Added [ConoscopicIntensityDimensions](./../api-reference.md#conoscopicintensitydimensions) as new object
- Added [IntensityDimensions](./../api-reference.md#intensitydimensions) as new object
- Added [IntensityOrientationConoscopic](./../api-reference.md#intensityorientationconoscopic) as new object
- Added [IntensityOrientationXAsMeridian](./../api-reference.md#intensityorientationxasmeridian) as new object
- Added [IntensityOrientationXAsParallel](./../api-reference.md#intensityorientationxasparallel) as new object
- Added [SensorNearField](./../api-reference.md#sensornearfield) as new object

### Polar Intensity sensor

- Added [polar_intensity_properties](./../api-reference.md#scenesensorinstance) as new field of the **Scene.SensorInstance** object
- Added [Scene.SensorInstance.PolarIntensityProperties](./../api-reference.md#scenesensorinstancepolarintensityproperties) as new object of the **Scene.SensorInstance** object
- Added [polar_intensity_sensor_template](./../api-reference.md#sensortemplate) as new field of the **SensorTemplate** object
- Added [SensorTemplate.PolarIntensity](./../api-reference.md#sensortemplatepolarintensity) as new object of the **SensorTemplate** object
- Added [SensorTemplate.PolarIntensity.SensorFarField](./../api-reference.md#sensortemplatepolarintensitysensorfarfield) as new object of the **SensorTemplate.PolarIntensity** object
- Added [PolarIntensityDimensions](./../api-reference.md#polarintensitydimensions) as new object
- Added [PolarIntensityEulumdat](./../api-reference.md#polarintensityeulumdat) as new object
- Added [PolarIntensityIesnaA](./../api-reference.md#polarintensityiesnaa) as new object
- Added [PolarIntensityIesnaB](./../api-reference.md#polarintensityiesnab) as new object
- Added [PolarIntensityIesnaC](./../api-reference.md#polarintensityiesnac) as new object
- Added [SensorNearField](./../api-reference.md#sensornearfield) as new object

### 3D Irradiance sensor

- Added [irradiance_3d_properties](./../api-reference.md#scenesensorinstance) as new field of the **Scene.SensorInstance** object
- Added [Scene.SensorInstance.Irradiance3DProperties](./../api-reference.md#scenesensorinstanceirradiance3dproperties) as new object of the **Scene.SensorInstance** object
- Added [irradiance_3d](./../api-reference.md#sensortemplate) as new field of the **SensorTemplate** object
- Added [SensorTemplate.Irradiance3D](./../api-reference.md#sensortemplateirradiance3d) as new object of the **SensorTemplate** object
- Added [SensorTemplate.Irradiance3D.IntegrationTypePlanar](./../api-reference.md#sensortemplateirradiance3dintegrationtypeplanar) as new object of the **SensorTemplate.Irradiance3D** object
- Added [SensorTemplate.Irradiance3D.IntegrationTypeRadial](./../api-reference.md#sensortemplateirradiance3dintegrationtyperadial) as new object of the **SensorTemplate.Irradiance3D** object
- Added [SensorTemplate.Irradiance3D.TypeColorimetric](./../api-reference.md#sensortemplateirradiance3dtypecolorimetric) as new object of the **SensorTemplate.Irradiance3D** object
- Added [SensorTemplate.Irradiance3D.TypeColorimetric.IntegrationType](./../api-reference.md#sensortemplateirradiance3dtypecolorimetricintegrationtype) as new object of the **SensorTemplate.Irradiance3D.TypeColorimetric** object
- Added [SensorTemplate.Irradiance3D.TypePhotometric](./../api-reference.md#sensortemplateirradiance3dtypephotometric) as new object of the **SensorTemplate.Irradiance3D** object
- Added [SensorTemplate.Irradiance3D.TypeRadiometric](./../api-reference.md#sensortemplateirradiance3dtyperadiometric) as new object of the **SensorTemplate.Irradiance3D** object

### Light Expert

- Added [lxp_properties](./../api-reference.md#scenesensorinstance) as new field of the **Scene.SensorInstance** object
- Added [Scene.SensorInstance.LXPProperties](./../api-reference.md#scenesensorinstancelxpproperties) as new object of the **Scene.SensorInstance** object
