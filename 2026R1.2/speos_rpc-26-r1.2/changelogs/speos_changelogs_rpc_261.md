# Speos RPC Changelog 2026 R1

## Sensor - VR Immersive sensor

- Added [immersive_properties](../api-reference.md#scenesensorinstance-1) as new field of **Scene.SensorInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [Scene.SensorInstance.ImmersiveProperties](../api-reference.md#scenesensorinstanceimmersiveproperties) as new object of **Scene.SensorInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [immersive_sensor_template](../api-reference.md#sensortemplate-1) as new field of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SensorTemplate.Immersive](../api-reference.md#sensortemplateimmersive) as new object of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SensorTemplate.Immersive.ExcludeFaces](../api-reference.md#sensortemplateimmersiveexcludefaces) as new object of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SensorTemplate.Stereo](../api-reference.md#sensortemplatestereo) as new object of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SplitSpeos360IntoXMPs_Request](../api-reference.md#splitspeos360intoxmps_request) as new object of **map** proto (results/v1/map.proto)
- Added [SplitSpeos360IntoXMPs_Response](../api-reference.md#splitspeos360intoxmps_response) as new object of **map** proto (results/v1/map.proto)
- Added [SplitSpeos360IntoXMPs](../api-reference.md#mapactions) as new field of **MapActions** object in **map** proto (results/v1/map.proto)

## Sensor - VR Observer sensor

- Added [observer_properties](../api-reference.md#scenesensorinstance-1) as new field of **Scene.SensorInstance** object
- Added [Scene.SensorInstance.ObserverProperties](../api-reference.md#scenesensorinstanceobserverproperties) as new object of **Scene.SensorInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [AngularRange](../api-reference.md#angularrange) as new object of **common** proto for sensors (sensor/v1/common.proto)
- Added [observer_sensor_template](../api-reference.md#sensortemplate) as new field of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SensorTemplate.Observer](../api-reference.md#sensortemplateobserver) as new object of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SensorTemplate.Stereo](../api-reference.md#sensortemplatestereo) as new object of **SensorTemplate** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [SplitSpeos360IntoXMPs_Request](../api-reference.md#splitspeos360intoxmps_request) as new object of **map** proto (results/v1/map.proto)
- Added [SplitSpeos360IntoXMPs_Response](../api-reference.md#splitspeos360intoxmps_response) as new object of **map** proto (results/v1/map.proto)
- Added [SplitSpeos360IntoXMPs](../api-reference.md#mapactions) as new field of **MapActions** object in **map** proto (results/v1/map.proto)

## Light Box: Scene (scene/v2/scene.proto)

- Added [password](../api-reference.md#loadfile_request-1) as new field of **LoadFile_Request** object in **scene v2** proto (scene/v2/scene.proto)
- Added [sub_scene_anchor_axis_system](../api-reference.md#scene-1) as new field of **scene** object in **scene v2** proto (scene/v2/scene.proto)
- [LoadFile](../api-reference.md#sceneactions-1) field of **SceneActions** object can now load *.SPEOSLightBox files

## Special character management: File Transfer (file/v1/file_transfer.proto)

- Added [file_name](../api-reference.md#chunk) as new field of **Chunk** object
- Added [file_name](../api-reference.md#reserve_request) as new field of **Reserve_Request** object

## Export job to *.speos: Job (job/v2/job.proto)

The following new objects and field replace **SaveFile_Request**, **SaveFile_Response**, **SaveFile** of **scene v1** and **scene v2** which are now unsupported (see [Unsupported objects and fields](speos_changelogs_rpc_261.md#unsupported-objects-and-fields) section below)

- Added [SaveFile_Request](../api-reference.md#savefile_request) as new object of **job v2** proto
- Added [SaveFile_Response](../api-reference.md#savefile_response) as new object of **job v2** proto
- Added [SaveFile](../api-reference.md#jobactions) as new field of **JobActions** object

## Get running server version: Server_Info (server_info/v1/server_info.proto)

- Added [server_info](../api-reference.md#server_infov1server_infoproto) as new proto containing the following objects:
  - [GetVersion_Request](../api-reference.md#getversion_request)
  - [GetVersion_Response](../api-reference.md#getversion_response)
  - [ServerInfo](../api-reference.md#serverinfo)

## Part (part/v1/part.proto)

- Added [metadata](../api-reference.md#partpartinstance) as new field of **Part.PartInstance** object
- Added [Part.PartInstance.MetadataEntry](../api-reference.md#partpartinstancemetadataentry) as new object of **Part** object

## Data (common/v1/data.proto)

- Added [wavelength](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [distance](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [dimension](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [plane_angle](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [curvature](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [curvature_product](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [photometric_power_density](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [radiometric_power_density](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [spherical_probability_density](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [temperature_elevation](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [colorimetric_error](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [signal_to_noise_ratio](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [precision](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [relative_standard_error](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [refractive_power](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [refractive_index](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [absorption](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [x_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [y_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [u_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [v_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [u_prime_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [v_prime_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [u_star_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [v_star_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [a_star_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [b_star_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [uppercase_c_star_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [h_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [uppercase_x_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [uppercase_y_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [uppercase_z_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [uppercase_l_star_color](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [glare](../api-reference.md#magnitude) as new field of **Magnitude** object
- Added [watts_per_square_foot](../api-reference.md#unit) as new field of **Unit** object
- Added [watts_per_square_foot_nanometer](../api-reference.md#unit) as new field of **Unit** object
- Added [lumens_per_square_centimeter](../api-reference.md#unit) as new field of **Unit** object
- Added [foot_candles](../api-reference.md#unit) as new field of **Unit** object
- Added [foot_candles_per_nanometer](../api-reference.md#unit) as new field of **Unit** object
- Added [square_meters](../api-reference.md#unit) as new field of **Unit** object
- Added [square_centimeters](../api-reference.md#unit) as new field of **Unit** object
- Added [square_millimeters](../api-reference.md#unit) as new field of **Unit** object
- Added [square_micrometers](../api-reference.md#unit) as new field of **Unit** object
- Added [square_nanometers](../api-reference.md#unit) as new field of **Unit** object
- Added [square_feet](../api-reference.md#unit) as new field of **Unit** object
- Added [square_inches](../api-reference.md#unit) as new field of **Unit** object
- Added [no_unit](../api-reference.md#unit) as new field of **Unit** object

## Object name displayed in report

- Added [display_name](../api-reference.md#body) as new field of **Body** object in **body** proto (part/v1/body.proto)
- Added [display_name](../api-reference.md#chunkfaceheader) as new field of **Chunk.FaceHeader** object in **face** proto (part/v1/face.proto)
- Added [display_name](../api-reference.md#face) as new field of **Face** object in **face** proto (part/v1/face.proto)
- Added [display_name](../api-reference.md#partpartinstance) as new field of **Part.PartInstance** object in **part** proto (part/v1/part.proto)
- Added [display_name](../api-reference.md#scenematerialinstance) as new field of **Scene.MaterialInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [display_name](../api-reference.md#scenesceneinstance-1) as new field of **Scene.SceneInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [display_name](../api-reference.md#scenesensorinstance-1) as new field of **Scene.SensorInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [display_name](../api-reference.md#scenesimulationinstance-1) as new field of **Scene.SimulationInstance** object in **scene v2** proto (scene/v2/scene.proto)
- Added [display_name](../api-reference.md#scenesourceinstance-1) as new field of **Scene.SourceInstance** object in **scene v2** proto (scene/v2/scene.proto)

## Guid management of object

- Added [guid](../api-reference.md#create_request) as new field of **Create_Request** object in **intensity** proto (intensity/v1/intensity.proto)
- Added [guid](../api-reference.md#create_request-1) as new field of **Create_Request** object in **job v2** proto (job/v2/job.proto)
- Added [guid](../api-reference.md#create_request-2) as new field of **Create_Request** object in **body** proto (part/v1/body.proto)
- Added [guid](../api-reference.md#create_request-3) as new field of **Create_Request** object in **face** proto (part/v1/face.proto)
- Added [guid](../api-reference.md#create_request-4) as new field of **Create_Request** object in **part** proto (part/v1/part.proto)
- Added [guid](../api-reference.md#create_request-6) as new field of **Create_Request** object in **scene v2** proto (scene/v2/scene.proto)
- Added [guid](../api-reference.md#create_request-7) as new field of **Create_Request** object in **sensor** proto (sensor/v1/sensor.proto)
- Added [guid](../api-reference.md#create_request-8) as new field of **Create_Request** object in **simulation_template** proto (simulation/v1/simulation_template.proto)
- Added [guid](../api-reference.md#create_request-9) as new field of **Create_Request** object in **sop** proto (sop/v1/sop.proto)
- Added [guid](../api-reference.md#create_request-10) as new field of **Create_Request** object in **source** proto (source/v1/source.proto)
- Added [guid](../api-reference.md#create_request-11) as new field of **Create_Request** object in **spectrum** proto (spectrum/v1/spectrum.proto)
- Added [guid](../api-reference.md#create_request-12) as new field of **Create_Request** object in **vop** proto (vop/v1/vop.proto)

## Unsupported objects and fields

- [OptisIntensityOptis](../api-reference.md#intensitytypes) field of **IntensityType** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisMapLayerTypeError](../api-reference.md#layertypes) field of **LayerTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisMapTypeBasic](../api-reference.md#maptypes) field of **MapTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisMapTypeLaser](../api-reference.md#maptypes) field of **MapTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisUnitTypeFTM](../api-reference.md#unittypes) field of **UnitTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeSel](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeLaserPhase](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeLaserPhasePlane](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeGain](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeWaveFront](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeFTM](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [OptisValueTypeRP](../api-reference.md#valuetypes) field of **ValueTypes** object in **base_map_template** proto (intensity_distributions/v1/base_map_template.proto) is now unsupported
- [SaveFile_Request](../api-reference.md#savefile_request-1) object of **scene v1** proto (scene/v1/scene.proto) is now unsupported
- [SaveFile_Response](../api-reference.md#savefile_response-1) object of **scene v1** proto (scene/v1/scene.proto) is now unsupported
- [SaveFile](../api-reference.md#sceneactions) field of **SceneActions** object in **scene v1** proto (scene/v1/scene.proto) is now unsupported
- [SaveFile_Request](../api-reference.md#savefile_request-2) object of **Scene v2** proto (scene/v2/scene.proto) is now unsupported
- [SaveFile_Response](../api-reference.md#savefile_response-2) object of **Scene v2** proto (scene/v2/scene.proto) is now unsupported
- [SaveFile](../api-reference.md#sceneactions-1) field of **SceneActions** object in **Scene v2** proto (scene/v2/scene.proto) is now unsupported

## Resolved Issues

- Speos RPC has been optimized to provide better management of textures and multi-textures. (1301931 - 1303354)
- Speos RPC has been improved to better manage the Environment sources. (1367209)
- Speos RPC has been improved to better manage the axis systems. Non-orthonormal axis systems are no longer permitted. (1267988)
- Speos RPC has been improved to better manage UV Mappings from imported *.speos files. Now one material is created for each UV Map. (1273221)
- **Before**: Speos RPC was always setting the Flux from the intensity file for a Luminaire source when running a GPU simulation, even if the user did set a custom flux value. (1298194)  
**Now**: Speos RPC correctly use the custom flux value when set by the user, and no longer defaults to the Flux from the intensity file.
- **Before**: when several *.polarizer files where used as input in a *.speos file, only one *.polarizer file was taken into account. (1301780)  
**Now**: all *.polarizer files are correctly taken into account.
