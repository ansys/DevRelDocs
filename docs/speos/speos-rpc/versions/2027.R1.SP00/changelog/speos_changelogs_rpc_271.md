# Speos RPC Changelog 2027 R1

**Release date:** 2026-12-07

## New features

### glTF Import

- Added the possibility to import glTF files using [LoadFile](../api-reference.md#sceneactions-1) method in *SceneActions* object of **scene v2** (scene/v2/scene.proto)

### 3D Texture

- Added [Scene.Texture3D](../api-reference.md#scenetexture3d) as new object of **Scene** object in **scene v2** (scene/v2/scene.proto)
- Added [Scene.Texture3D.Pattern3D](../api-reference.md#scenetexture3dpattern3d) as new object of **Scene.Texture3D** object in **scene v2** (scene/v2/scene.proto)
- Added [Scene.Texture3D.PatternOperation](../api-reference.md#scenetexture3dpatternoperation) as new object of **Scene.Texture3D** object in **scene v2** (scene/v2/scene.proto)
- Added [textures_3d](../api-reference.md#scene-1) as new field of **Scene** object in **scene v2** (scene/v2/scene.proto)

### Sensor: 3D Energy Density

- Added [SensorTemplate.EnergyDensity](../api-reference.md#sensortemplateenergydensity) as new object of **SensorTemplate** object in **sensor v2** (sensor/v2/sensor.proto)
- Added [SensorTemplate.EnergyDensity.Dimensions3D](../api-reference.md#sensortemplateenergydensitydimensions3d) as new object of **SensorTemplate.EnergyDensity** object in **sensor v2** (sensor/v2/sensor.proto)
- Added [Scene.SensorInstance.EnergyDensityProperties](../api-reference.md#scenesensorinstanceenergydensityproperties) as new object of **Scene.SensorInstance** object in **scene v2** (scene/v2/scene.proto)
- Added [energy_density_properties](../api-reference.md#scenesensorinstance-1) as new field of **Scene.SensorInstance** object in **scene v2** (scene/v2/scene.proto)

### Sensor: Human Eye

- Added [SensorTemplate.HumanEye](../api-reference.md#sensortemplatehumaneye) as new object of **SensorTemplate** object in **sensor v2** (sensor/v2/sensor.proto)
- Added [Scene.SensorInstance.HumanEyeProperties](../api-reference.md#scenesensorinstancehumaneyeproperties) as new object of **Scene.SensorInstance** object in **scene v2** (scene/v2/scene.proto)
- Added [human_eye_properties](../api-reference.md#scenesensorinstance-1) as new field of **Scene.SensorInstance** object in **scene v2** (scene/v2/scene.proto)

### Sensor (sensor/v2/sensor.proto)

- Added new [sensor/v2/sensor.proto](../api-reference.md#sensorv2sensorproto) as a version 2 of **sensor** proto for a better management of sensors. [sensor/v1/sensor.proto](../api-reference.md#sensorv1sensorproto) still exists to keep backward compatibility.

### Force Version

- Added [force_version](../api-reference.md#loadfile_request-1) as new field of **LoadFile_Request** object in **scene v2** (scene/v2/scene.proto)
- Added [LoadFile_Request.ForceVersionEntry](../api-reference.md#loadfile_requestforceversionentry) as new object of **LoadFile_Request** object in **scene v2** (scene/v2/scene.proto)

**force_version** forces the creation of an ObjectTemplate using the defined version number. By default, if there are multiple versions of an ObjectTemplate, the most recent version is used.

**Example**: now that there are a sensor/v1/sensor.proto and a sensor/v2/sensor.proto, if you want to use the version 1 of SensorTemplate, you will write ("SensorTemplateVersion", 1).

## Improvements

### Fast Transmission Gathering

- Added [Scene.FastTransmissionGathering](../api-reference.md#scenefasttransmissiongathering) as new object of **Scene** object in **scene v2** (scene/v2/scene.proto)
- Added [fast_transmission_gathering](../api-reference.md#scene-1) as new field of **Scene** object in **scene v2** (scene/v2/scene.proto)

### Total Internal Reflection status

- Added [StatusTIR](../api-reference.md#raypathphotonstatus) as new value of **RayPath.PhotonStatus** enum in **lpf v2** (lpf/v2/lpf_file_reader.proto)
- Added [StatusTIR](../api-reference.md#raypathphotonstatus-1) as new value of **RayPath.PhotonStatus** enum in **results v1** (results/v1/ray_path.proto)

### job_v2

- Added [job_v2](../api-reference.md#loadfileresponse) as new field of **LoadFile_Response** object in **scene v2** (scene/v2/scene.proto)

**job_v2** field allows you to retrieve job characteristics defined in [Job](../api-reference.md#job) object.

## Experimental proto

New experimental proto APIs are available for evaluation and workflow testing. These APIs are still under development and may change or be removed in future releases. Avoid relying on them in production environments.

### Experimental (experimental/results/v1/measurement_set.proto)

- Added [measurement_set](../api-reference.md#experimentalresultsv1measurement_setproto) as a new **experimental result** proto (experimental/results/v1/measurement_set.proto)

**measurement_set.proto** defines measurement sets: reusable collections of measurements to evaluate on Speos results. A set can include:
- Measures such as minimum, maximum, average, flux, or area.
- Areas on XMP or XM3 results where measurements apply.
- Rules and constraints, such as thresholds, with evaluation status and warnings.

### Experimental (experimental/results/v1/monitor.proto)

- Added [monitor](../api-reference.md#experimentalresultsv1monitorproto) as a new **experimental result** proto (experimental/results/v1/monitor.proto)

**monitor.proto** defines display-monitor settings for visualizing results.

### Experimental (experimental/results/v1/proto_file_io.proto)

- Added [proto_file_io](../api-reference.md#experimentalresultsv1proto_file_ioproto) as a new **experimental result** proto (experimental/results/v1/proto_file_io.proto)

**proto_file_io.proto** provides file import and export for configuration.

### Experimental (experimental/results/v1/result_options.proto)

- Added [result_options](../api-reference.md#experimentalresultsv1result_optionsproto) as a new **experimental result** proto (experimental/results/v1/result_options.proto)

**result_options.proto** defines reusable settings for processing and displaying Speos results.

### Experimental (experimental/results/v1/results.proto)

- Added [results](../api-reference.md#experimentalresultsv1resultsproto) as a new **experimental result** proto (experimental/results/v1/results.proto)

**results.proto** defines APIs for querying and retrieving data from XMP and XM3 result files.

### Experimental (experimental/sop/v1/sop.proto)

- Added [sop](../api-reference.md#experimentalsopv1sopproto) as a new **experimental sop** proto (experimental/sop/v1/sop.proto)

**sop.proto** defines an experimental API for evaluating optical metrics of a Surface Optical Property (SOP).
