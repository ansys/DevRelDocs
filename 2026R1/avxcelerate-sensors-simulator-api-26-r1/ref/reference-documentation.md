# Reference documentation

## ansys/api/avxcelerate/sensors/v1/colors.proto

This file describes the `Color` message used in other messages of this API.

### Color

Defines a color in RGB format.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `red` | [uint32](#uint32) |  | The value for the red component.<br>Range: [0, 255] |
| `green` | [uint32](#uint32) |  | The value for the green component.<br>Range: [0, 255] |
| `blue` | [uint32](#uint32) |  | The value for the blue component.<br>Range: [0, 255] |

### Spectrum

Defines a spectrum with a percent intensity value per wavelength. For each wavelength, the value corresponds to the part of this wavelength power in the total spectrum power.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | double | repeated | A list of pairs, each pair associating a wavelength with a value in percent.<br>Units:<br>The wavelength is in nanometer (nm).<br>The intensity for this wavelength is in percent (value between 0 and 100).<br>Note: You must provide an even number of data. |

## ansys/api/avxcelerate/sensors/v1/data_access/sensor_data_access.proto

This file describes the service used to access the sensor data produced during the AVX simulation.

### DataAccess

Data Access Service

This service provides the procedures to request sensor data during the simulation.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RequestData | [SensorDataIdentifier](#sensordataidentifier) | [SensorDataBuffer](#sensordatabuffer) | Requests the produced sensor data using the specified sensor data identifier.<br>Returns the requested data as a serialized sensor data buffer.<br>Note: With this procedure call, the size of the message is limited to 2 gigabytes. |
| RequestDataStream | [SensorDataIdentifier](#sensordataidentifier) | [SensorDataBuffer](#sensordatabuffer) stream | Requests the produced sensor data using the specified sensor data identifier.<br>Returns the requested data as a stream of sensor data buffer.<br>Note: With this procedure call, the message has no size limitation. |


## ansys/api/avxcelerate/sensors/v1/data_access/sensor_data_buffer.proto

This file describes the message containing the serialized sensor data produced during simulation.

### SensorDataBuffer

Sensor data, serialized as a byte array, returned by the `RequestData` procedure.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | bytes |  | A sensor data buffer serialized using the `vss.sensor_data.SensorData` message. |

## ansys/api/avxcelerate/sensors/v1/data_access/sensor_data_description.proto

This file describes the messages used to define the content of user notifications when new sensor data is produced.

### CameraFeedback

Camera sensor parameters that were used to produce the data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `exposure_time` | google.protobuf.Duration |  | Value of the exposure time.<br>The value is represented as a count of seconds and fractions of seconds at nanosecond resolution. |
| `gain` | double |  | Value of the gain. |
| `injection_time` | google.protobuf.Int32Value |  | Value of the injection time.<br>Note: This value only makes sense when the injection mode is activated, as it is encoded in the pixel defined in the injection parameters. |

### CameraMetadata

Metadata associated with a data produced by a camera sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `formats` | [ansys.api.avxcelerate.sensors.v1.CameraDataFormat](#cameradataformat) | repeated | The types of data produced by the camera. <br>Can be the following: `RAW`, `TEMPERATURE_MAP`, `SPECTRAL_IRRADIANCE_MAP` or `CUSTOM_DATA`. |
| `image_width` | int32 |  | The width of the camera output. |
| `image_height` | int32 |  | The height of the camera output. |
| `pixel_format` | [ansys.api.avxcelerate.sensors.v1.PixelFormat](#pixelformat) |  | The pixel format of the image. |
| `ground_truth_formats` | [ansys.api.avxcelerate.sensors.v1.CameraGroundTruthDataFormat](#cameragroundtruthdataformat) | repeated | The list of ground truth data available. |
| `nb_of_2Dbounding_boxes` | google.protobuf.Int32Value |  | The number of 2D bounding boxes that have been produced.<br>Note: The number of 2D and 3D bounding boxes produced is the same, therefore this field also indicates the number of 3D bounding boxes. |

### LidarMetadata

Metadata associated with a data produced by a lidar sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `formats` | [ansys.api.avxcelerate.sensors.v1.LidarDataFormat](#lidardataformat) | repeated | The format(s) of the data produced by a lidar sensor. |
| `resolution` | [Resolution](#resolution) |  | Resolution. |

### RadarDebugViewMetadata

Data description of the radar's debug view output.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `image_width` | int32 |  | The width of the debug view's image output. |
| `image_height` | int32 |  | The height of the debug view's image output. |
| `pixel_format` | [ansys.api.avxcelerate.sensors.v1.PixelFormat](#pixelformat) |  | The pixel format of the image. |
| `mode_identifier` | google.protobuf.Int32Value |  | The identifier of the corresponding radar mode. |

### RadarMetadata

Metadata associated with a data produced by a radar sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `formats` | [ansys.api.avxcelerate.sensors.v1.RadarDataFormat](#radardataformat) | repeated | The format(s) of the data produced by a radar sensor. |
| `mode_identifier` | google.protobuf.Int32Value |  | The identifier of the mode that has produced the data. |
| `tx_identifier` | google.protobuf.Int32Value |  | The identifier of the transmitter antenna that has produced the data. |
| `tx_waveform_reported` | bool |  | Field indicating whether or not TX waveform data are available. |

### Resolution

Resolution of a lidar output.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `horizontal_resolution` | int32 |  | Horizontal resolution of lidar. |
| `vertical_resolution` | int32 |  | Vertical resolution of lidar. |

### SensorDataDescription

Content of the notifications sent any time sensor data is produced.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sensor_id` | [ansys.api.avxcelerate.sensors.v1.ResourceIdentifier](#resourceidentifier) |  | The identifier of the sensor which produced the data.<br>Note: The identifier corresponds to the identifier defined in the sensor configuration. |
| `simulation_time` | google.protobuf.Duration |  | The simulation time of the produced data. |
| `data_by_identifiers` | [SensorDataInfo](#sensordatainfo) | repeated | Metadata description for the data produced by one sensor at a specific simulation time. |

### SensorDataInfo

Sensor data info that contains sensor metadata for a given data identifier.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data_id` | [SensorDataIdentifier](#sensordataidentifier) |  | The identifier of the produced data.<br>To be used by the subscriber to retrieve the sensor output data. |
| `metadata` | [SensorMetadata](#sensormetadata) |  | SensorMetadata. |

### SensorMetadata

Metadata associated with the produced data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>value</code></small> `camera_metadata` | [CameraMetadata](#camerametadata) |  | Metadata for data produced by a camera sensor. |
| <small><strong>oneof</strong> <code>value</code></small> `lidar_metadata` | [LidarMetadata](#lidarmetadata) |  | Metadata for data produced by a lidar sensor. |
| <small><strong>oneof</strong> <code>value</code></small> `radar_metadata` | [RadarMetadata](#radarmetadata) |  | Metadata for data produced by a radar sensor. |
| <small><strong>oneof</strong> <code>value</code></small> `radar_debug_view_metadata` | [RadarDebugViewMetadata](#radardebugviewmetadata) |  | Metadata for a debug view image produced by a radar sensor. |
| <small><strong>oneof</strong> <code>feedback</code></small> `camera_feedback` | [CameraFeedback](#camerafeedback) |  | Current values of some of the camera sensor's parameters that were used to produce this data. |
| `data_serialized` | bool |  | Field indicating whether or not the sensor's output data is serialized. |
| `deploy_host_address` | string |  | Address of the Deploy host where the sensor data was generated. |
| `data_access_server_port` | google.protobuf.Int32Value |  | TCP port used to communicate with the data access server.<br>If no value provided, data are available only on the shared memory. |

## ansys/api/avxcelerate/sensors/v1/data_access/sensor_data_identifier.proto

This file describes the message used to request the sensor data produced during the AVX simulation.

### SensorDataIdentifier

Key to retrieve a sensor data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data_id` | string |  | A unique identifier for a produced sensor data. |

## ansys/api/avxcelerate/sensors/v1/data_access/sensor_data_output_notification.proto

This file describes the service used to get notifications when new sensor data is produced.

### SensorDataNotifier

Sensor Data Notifier Service

This service provides the procedures to get notified when new sensor data is available in the data store.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Subscribe | .google.protobuf.Empty | [SensorDataDescription](#sensordatadescription) stream | Subscribes to the stream publishing notifications about new sensor data in the data store. This stream ends when the simulation is completed.<br>Returns a stream of sensor data descriptions containing all the needed information to identify the type of the newly generated data and to request it from the data store. |

## ansys/api/avxcelerate/sensors/v1/feedback_control/brown_distortion.proto

This file describes the brown distortion messages that are used in other messages of the API.

### BrownDistortion

Definition of the brown distortion.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `radial_distortion` | [BrownRadialDistortion](#brownradialdistortion) |  | BrownRadialDistortion. |
| `tangential_distortion` | [BrownTangentialDistortion](#browntangentialdistortion) |  | BrownTangentialDistortion. |

### BrownRadialDistortion

Lens radial distortion coefficients for Brown-Conrady distortion model (k1, k2, k3).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `k1` | google.protobuf.DoubleValue |  | K1 coefficient value of radial distortion. |
| `k2` | google.protobuf.DoubleValue |  | K2 coefficient value of radial distortion. |
| `k3` | google.protobuf.DoubleValue |  | K3 coefficient value of radial distortion. |

### BrownTangentialDistortion

Lens tangential distortion coefficients for Brown-Conrady distortion model (p1, p2).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `p1` | google.protobuf.DoubleValue |  | P1 coefficient value of tangential distortion. |
| `p2` | google.protobuf.DoubleValue |  | P2 coefficient value of tangential distortion. |

## ansys/api/avxcelerate/sensors/v1/feedback_control/feedback_control.proto

This file describes the service used to implement a feedback control for sensors.

### FeedbackControl

Feedback Control Service

This service provides the procedures to update specific parameters of sensors during the simulation. It could be used to implement an auto adaptive algorithm.

Note: The changes are not directly applied to the sensor. First, the update will be sent to the sensor at the next world update (requested using the `Update` method of the Simulation service). Then, the sensor will be reloaded so that the updated parameter(s) are used for the next output calculation. However, a sensor cannot be reloaded during an ongoing output calculation, it can be reloaded only after the computation is completed.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Send | [FeedbackControlDescription](#feedbackcontroldescription) | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Sends a sensor (camera, lidar, radar) feedback control.<br>Returns a processing Status. |

## ansys/api/avxcelerate/sensors/v1/feedback_control/feedback_control_camera_parameters.proto

This file describes the messages used to alter some camera parameters during the simulation execution.

### AdvancedChromaticAberration

Advanced Chromatic Aberration Parameters

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `focal_lengths` | [SpectralFocalLengthDistribution](#spectralfocallengthdistribution) |  | Focal length of the lens system. |

### CircularAperture

Circular Aperture Shape

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `aperture_area` | google.protobuf.DoubleValue |  | The aperture area.<br>Unit: square meters (m^2) |

### CustomChromaticDispersion

Custom Chromatic Dispersion Parameters

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `focal_shift` | double |  | Focal length difference between the maximum and minimum wavelengths. <br>Unit: meter (m) |

### Demosaicing

Parameters for the Physics-based Camera Demosaicing Output

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `bit_depth_reduction` | google.protobuf.Int32Value |  | Number of bits for the data encoding. |

### Electronics

Camera Electronics Parameters

Note: Changing the result conversion type during the simulation is not allowed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `bits` | google.protobuf.Int32Value |  | The number defining the native bit depth of the camera. |
| `gain` | google.protobuf.DoubleValue |  | The voltage gain of the camera.<br>Unit: dB |
| <small><strong>oneof</strong> <code>results_conversion</code></small> `demosaicing` | [Demosaicing](#demosaicing) |  | Demosaicing output. |
| <small><strong>oneof</strong> <code>results_conversion</code></small> `injection` | [Injection](#injection) |  | Injection output. |

### FeedbackControlCameraParameters

Update to apply to one or several parameters of a camera sensor during the simulation. This messages contains the camera parameter(s) to be updated.

Note: At least one parameter must be provided at each call.

Note: The changes are not directly applied to the camera. First, the update will be sent to the camera at the next world update (requested using the `Update` method of the Simulation service). Then, the camera will be reloaded (except for camera gain, exposure and time encoding) so that the updated parameter(s) are used for the next output calculation. However, a camera cannot be reloaded during an ongoing output calculation, it can be reloaded only after the computation is completed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `lens` | [Lens](#lens) |  | Lens parameters. |
| `imager` | [Imager](#imager) |  | Imager parameters. |
| `electronics` | [Electronics](#electronics) |  | Electronics (post-processing) parameters. |

### FisheyePolynomialDistortion

Fisheye Distortion Parameters

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `a1` | google.protobuf.DoubleValue |  | A1 coefficient value of fisheye parameter. |
| `a2` | google.protobuf.DoubleValue |  | A2 coefficient value of fisheye parameter. |
| `a3` | google.protobuf.DoubleValue |  | A3 coefficient value of fisheye parameter. |
| `a4` | google.protobuf.DoubleValue |  | A4 coefficient value of fisheye parameter. |
| `a5` | google.protobuf.DoubleValue |  | A5 coefficient value of fisheye parameter. |

### Imager

Camera Imager System Parameters

Parameters of the camera imager: resolution, exposure time, read out noise and thermal noise model.

Note: Changing the thermal noise model during the simulation is not allowed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `resolution` | [ImagerResolution](#imagerresolution) |  | ImagerResolution. |
| `exposure_time` | google.protobuf.DoubleValue |  | Exposure time value.<br>Unit: seconds (s) |
| `readout_noise` | [ReadoutNoise](#readoutnoise) |  | ReadoutNoise. |
| <small><strong>oneof</strong> <code>thermal_noise</code></small> `thermal_noise_simple` | [ThermalNoiseSimpleModel](#thermalnoisesimplemodel) |  | ThermalNoiseSimpleModel. |
| <small><strong>oneof</strong> <code>thermal_noise</code></small> `thermal_noise_advanced` | [ThermalNoiseAdvancedModel](#thermalnoiseadvancedmodel) |  | ThermalNoiseAdvancedModel. |

### ImagerResolution

Resolution of the Imager

Note: Changing the sensor resolution does not update the resolution of the rendering window.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `width` | google.protobuf.Int32Value |  | Width of the sensor in number of pixels. |
| `height` | google.protobuf.Int32Value |  | Height of the sensor in number of pixels. |

### Injection

Parameters for the Injection Data Output

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `time_encoding` | [InjectionTimeEncoding](#injectiontimeencoding) |  | InjectionTimeEncoding. |

### InjectionTimeEncoding

The Timestamp Encoding

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `row` | google.protobuf.Int32Value |  | Row position of the pixel in which the simulation time is encoded. |
| `column` | google.protobuf.Int32Value |  | Column position of the pixel in which the simulation time is encoded. |

### Lens

Camera Lens System Parameters

Parameters of the camera lens system: focal length, distortion model, shape of the lens' aperture, and type of chromatic aberration.

Note: Changing the lens distortion model or the aperture shape during the simulation is not allowed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>distortion</code></small> `fisheye_polynomial_distortion` | [FisheyePolynomialDistortion](#fisheyepolynomialdistortion) |  | Polynomial distortion parameters (for fisheye cameras). |
| <small><strong>oneof</strong> <code>distortion</code></small> `brown_distortion` | [BrownDistortion](#browndistortion) |  | Brown distortion parameters (for cameras with standard field of view). |
| <small><strong>oneof</strong> <code>aperture_shape</code></small> `circular` | [CircularAperture](#circularaperture) |  | Circular aperture. |
| <small><strong>oneof</strong> <code>aperture_shape</code></small> `regular_convex` | [RegularConvexPolygonAperture](#regularconvexpolygonaperture) |  | Regular convex polygon aperture. |
| <small><strong>oneof</strong> <code>lens_chromatic_aberration</code></small> `simple_chromatic_aberration` | [SimpleChromaticAberration](#simplechromaticaberration) |  | Simple chromatic aberration. |
| <small><strong>oneof</strong> <code>lens_chromatic_aberration</code></small> `advanced_chromatic_aberration` | [AdvancedChromaticAberration](#advancedchromaticaberration) |  | Advanced chromatic aberration. |

### ReadoutNoise

Readout Noise Parameters

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `readout_noise_average` | google.protobuf.DoubleValue |  | Average value of the Gaussian distribution.<br>Unit: number of electrons. |
| `readout_noise_standard` | google.protobuf.DoubleValue |  | Standard deviation of the Gaussian distribution.<br>Unit: number of electrons. |

### RegularConvexPolygonAperture

Polygonal Aperture Shape

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `aperture_area` | google.protobuf.DoubleValue |  | The aperture area.<br>Unit: square meters (m^2) |
| `offset_angle` | google.protobuf.DoubleValue |  | The offset angle.<br>Unit: radians (rad) |
| `edge_number` | google.protobuf.Int32Value |  | The number of aperture sides/edges. |

### SimpleChromaticAberration

Simple Chromatic Aberration Parameters

Note: It is not possible to change from a Chromatic Dispersion Preset to a Custom Chromatic Dispersion or vice-versa.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `focal_length` | google.protobuf.DoubleValue |  | Focal length of the lens system.<br>Unit: meter (m) |
| `wavelength_of_focal_length` | google.protobuf.DoubleValue |  | Wavelength at which the focal length is not affected by chromatic aberration.<br>Unit: meter (m) |
| <small><strong>oneof</strong> <code>chromatic_dispersion</code></small> `preset_chromatic_dispersion` | [PresetChromaticDispersion](#presetchromaticdispersion) |  | Preset chromatic dispersion |
| <small><strong>oneof</strong> <code>chromatic_dispersion</code></small> `custom_chromatic_dispersion` | [CustomChromaticDispersion](#customchromaticdispersion) |  | Custom chromatic dispersion |

### SpectralFocalLengthDistribution

Spectral Focal Length Distribution

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `focal_length_390` | double |  | Distance between the optical center of the lens and the focal point for the 390 wavelength.<br>Unit: meter (m) |
| `focal_length_427` | double |  | Distance between the optical center of the lens and the focal point for the 427 wavelength.<br>Unit: meter (m) |
| `focal_length_464` | double |  | Distance between the optical center of the lens and the focal point for the 464 wavelength.<br>Unit: meter (m) |
| `focal_length_502` | double |  | Distance between the optical center of the lens and the focal point for the 390 wavelength.<br>Unit: meter (m) |
| `focal_length_539` | double |  | Distance between the optical center of the lens and the focal point for the 502 wavelength.<br>Unit: meter (m) |
| `focal_length_577` | double |  | Distance between the optical center of the lens and the focal point for the 539 wavelength.<br>Unit: meter (m) |
| `focal_length_614` | double |  | Distance between the optical center of the lens and the focal point for the 577 wavelength.<br>Unit: meter (m) |
| `focal_length_652` | double |  | 652 between the optical center of the lens and the focal point for the 390 wavelength.<br>Unit: meter (m) |

### ThermalNoiseAdvancedModel

Thermal Noise Parameters for the Advanced Model

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `dark_current_reference_value` | google.protobuf.DoubleValue |  | Dark current reference value.<br>Unit: number of electrons per second |
| `dark_current_reference_temperature` | google.protobuf.DoubleValue |  | Dark current reference temperature.<br>Unit: Kelvin (K) |
| `imager_temperature` | google.protobuf.DoubleValue |  | Imager temperature.<br>Unit: Kelvin (K) |
| `dark_current_coefficient` | google.protobuf.DoubleValue |  | Dark current temperature coefficient.<br>Unit: Kelvin (K) |

### ThermalNoiseSimpleModel

Thermal Noise Parameters for the Simple Model

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `dark_current_average_value` | google.protobuf.DoubleValue |  | Average dark current value.<br>Unit: number of electrons per second |

### PresetChromaticDispersion

The available chromatic dispersion presets.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| LOW | 1 |  |
| MEDIUM | 2 |  |
| HIGH | 3 |  |

## ansys/api/avxcelerate/sensors/v1/feedback_control/feedback_control_description.proto

This file describes the message used to alter sensor parameters during the simulation execution.

### FeedbackControlDescription

Update to apply to one or several parameters of a sensor during the simulation.

This messages contains the sensor parameter(s) to be updated.

Note: At least one parameter must be provided at each call.

Note: The changes are not directly applied to the sensor. First, the update will be sent to the sensor at the next world update (requested using the `Update` method of the Simulation service). Then, the sensor will be reloaded so that the updated parameter(s) are used for the next output calculation. However, a sensor cannot be reloaded during an ongoing output calculation, it can be reloaded only after the computation is completed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sensor_id` | string |  | The identifier of the sensor as defined in the sensor configuration.<br>Note: This identifier is required for each call and must identify a sensor. |
| <small><strong>oneof</strong> <code>feedback_control_sensor_parameters</code></small> `feedback_control_camera_parameters` | [FeedbackControlCameraParameters](#feedbackcontrolcameraparameters) |  | This message is used to update a camera parameters during the simulation. |
| <small><strong>oneof</strong> <code>feedback_control_sensor_parameters</code></small> `feedback_control_radar_parameters` | [FeedbackControlRadarParameters](#feedbackcontrolradarparameters) |  | This message is used to update a radar parameters during the simulation. |
| <small><strong>oneof</strong> <code>feedback_control_sensor_parameters</code></small> `feedback_control_lidar_parameters` | [FeedbackControlLidarParameters](#feedbackcontrollidarparameters) |  | This message is used to update a lidar parameters during the simulation. |
| `enable_sensor_protection` | [SensorProtectionEnabler](#sensorprotectionenabler) |  | Enables IP protection for the sensor. When IP protection is enabled for a radar, no waveform report is generated for this radar. This has no effect on any other sensor. |

### SensorProtectionEnabler

This message is used to enable sensor protection.

Note: Once enabled, IP protection cannot be disabled.

## ansys/api/avxcelerate/sensors/v1/feedback_control/feedback_control_lidar_parameters.proto

This file describes the messages used to alter lidar parameters during the simulation execution.

### AnalogToDigitalConverter

Definition of the analog-to-digital converter.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sampling_frequency` | google.protobuf.DoubleValue |  | Sampling Frequency of the analog-to-digital converter defining the temporal resolution, i.e. the spatial accuracy (a = c / f).<br>Unit: hertz (Hz) |
| `bit_resolution` | google.protobuf.Int32Value |  | Number of bits used for the waveform amplitude in the analog-to-digital converter. |

### BeamDivergence

Divergence of the gaussian beam.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `horizontal` | google.protobuf.DoubleValue |  | Horizontal divergence of the gaussian beam.<br>Unit: radians (rad) |
| `vertical` | google.protobuf.DoubleValue |  | Vertical divergence of the gaussian beam.<br>Unit: radians (rad) |

### BeamShapeIntensityFile

Intensity of the beam.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `intensity_file` | bytes |  | Byte array representing the beam spatial shape's pattern table. |
| `file_type` | [IntensityFileType](#intensityfiletype) |  | Type of the intensity file.<br>Note: If no file type is provided, the default value will be considered as the type of the intensity file. |

### FeedbackControlLidarParameters

Update to apply to one or several parameters of a lidar sensor during the simulation.

This messages contains the type of lidar and the parameter(s) to be updated.

Note: At least one parameter must be provided at each call.

Note: The changes are not directly applied to the lidar. First, the update will be sent to the lidar at the next world update (requested using the `Update` method of the Simulation service). Then, the lidar will be reloaded so that the updated parameter(s) are used for the next output calculation. However, a lidar cannot be reloaded during an ongoing output calculation, it can be reloaded only after the computation is completed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>model</code></small> `rotating_lidar` | [RotatingLidar](#rotatinglidar) |  | RotatingLidar. |
| <small><strong>oneof</strong> <code>model</code></small> `flash_lidar` | [FlashLidar](#flashlidar) |  | FlashLidar. |

### FieldOfView

Field of view definition.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `horizontal` | google.protobuf.DoubleValue |  | Horizontal field of view of the receiver.<br>Unit: radians (rad) |
| `vertical` | google.protobuf.DoubleValue |  | Vertical field of view of the receiver.<br>Unit: radians (rad) |

### Firing

Parameters of a lidar firing sequence.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `time` | google.protobuf.DoubleValue |  | Time offset of the firing.<br>Unit: seconds (s) |
| `azimuth` | google.protobuf.DoubleValue |  | Rotation offset of the firing.<br>Unit: radians (rad) |
| `elevation` | google.protobuf.DoubleValue |  | Elevation offset of the firing.<br>Unit: radians (rad) |
| `peak_power` | google.protobuf.DoubleValue |  | Peak power of the firing.<br>Note: The peak power (in Watts) is calculated based on the firing energy (in Joules), the pulse shape and the pulse duration (in seconds). <br>This calculation should be considered when applying an update that modifies the firings through the Feedback Control message. <br>For more information about how to calculate the peak power from the pulse energy, refer to AVxcelerate Sensors Simulator User's Guide.<br>Unit: watts (W) |

### FiringSequence

Description of the firing sequence.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `firings` | [Firing](#firing) | repeated | Describes the firing sequence.<br>Note: When adjusting the firing sequence via the feedback control, make sure to update every parameter of the sequence to keep it consistent. <br>Sending a partial update (updating only one of the parameters) will cause other parameters to use default values. |

### FlashLidar

Parameters for a flashing lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `emitter` | [FlashLidarEmitter](#flashlidaremitter) |  | FlashLidarEmitter. |
| `receiver` | [FlashLidarReceiver](#flashlidarreceiver) |  | FlashLidarReceiver. |

### FlashLidarEmitter

Emitter parameters of the flashing lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `frequency` | google.protobuf.DoubleValue |  | Frequency of the laser fan shots.<br>Unit: hertz (Hz) |
| `laser_pulse` | [Pulse](#pulse) |  | Pulse |
| <small><strong>oneof</strong> <code>beam_shape</code></small> `gaussian_beam_shape` | [GaussianBeamShape](#gaussianbeamshape) |  | Parametric Gaussian beam shape. |
| <small><strong>oneof</strong> <code>beam_shape</code></small> `beam_shape_intensity_file` | [BeamShapeIntensityFile](#beamshapeintensityfile) |  | Intensity file describing the beam shape. |
| `peak_power` | google.protobuf.DoubleValue |  | Maximum power emitted by the laser pulse.<br>Unit: watts (W) |

### FlashLidarReceiver

Receiver parameters of the flashing lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `lens_system` | [LensSystem](#lenssystem) |  | LensSystem. |
| `resolution_in_pixels` | [Resolution](#resolution) |  | Resolution. |
| `photo_detector` | [PhotoDetector](#photodetector) |  | PhotoDetector. |
| `processor` | [LidarProcessor](#lidarprocessor) |  | LidarProcessor. |

### GaussianBeamShape

Shape of the gaussian beam.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `divergence` | [BeamDivergence](#beamdivergence) |  | BeamDivergence. |

### LensDistortion

Lens distortion definition.

Definition of the lens distortion of the flashing Lidar receiver.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>distortion</code></small> `brown_distortion` | [BrownDistortion](#browndistortion) |  | Definition of the brown distortion. |

### LensSystem

Lens system definition.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `aperture_area` | google.protobuf.DoubleValue |  | Aperture area of the receiver.<br>Unit: square meters (m^2) |
| `field_of_view` | [FieldOfView](#fieldofview) |  | FieldOfView. |
| `lens_distortion` | [LensDistortion](#lensdistortion) |  | LensDistortion. |

### LidarProcessor

Lidar processor definition.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `analog_to_digital_converter` | [AnalogToDigitalConverter](#analogtodigitalconverter) |  | AnalogToDigitalConverter. |
| `max_returns` | google.protobuf.Int32Value |  | Maximum number of returns in the output. |
| `max_range` | google.protobuf.DoubleValue |  | Maximum range of the lidar.<br>Unit: meters (m) |

### PhotoDetector

Photo detector definition.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `responsivity` | google.protobuf.DoubleValue |  | Number of bits used for the waveform amplitude in the analog-to-digital converter.<br>Unit: A/W<br>Range: [0, 1] |
| `max_current` | google.protobuf.DoubleValue |  | Saturation generated by the photo-detector.<br>Unit: amperes (A) |
| `noise_standard_deviation` | google.protobuf.DoubleValue |  | Current standard deviation of noise.<br>Unit: amperes (A) |

### Pulse

Pulse of the laser.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `wavelength` | google.protobuf.DoubleValue |  | Wavelength of the laser beam.<br>Unit: meters (m) |
| `shape` | [PulseShape](#pulseshape) |  | PulseShape. |
| `duration` | google.protobuf.DoubleValue |  | Duration of the emitted laser pulse.<br>Unit: seconds (s) |
| `extinction_coefficient` | google.protobuf.DoubleValue |  | Atmospheric attenuation coefficient.<br>Unit: m^-1 |

### Resolution

Resolution of the detector, in pixels.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `horizontal` | google.protobuf.Int32Value |  | Number of horizontal pixels. |
| `vertical` | google.protobuf.Int32Value |  | Number of vertical pixels. |

### RotatingLidar

Parameters for a rotating lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `rotation_speed` | google.protobuf.DoubleValue |  | Rotation speed of the rotating lidar.<br>Unit: number of rotations per second. |
| `emitter` | [RotatingLidarEmitter](#rotatinglidaremitter) |  | RotatingLidarEmitter. |
| `receiver` | [RotatingLidarReceiver](#rotatinglidarreceiver) |  | RotatingLidarReceiver. |

### RotatingLidarEmitter

Emitter parameters of the rotating lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `frequency` | google.protobuf.DoubleValue |  | Frequency of the laser fan shots.<br>Unit: hertz (Hz) |
| `laser_pulse` | [Pulse](#pulse) |  | Pulse. |
| `beam_shape` | [GaussianBeamShape](#gaussianbeamshape) |  | GaussianBeamShape. |
| `firing_sequence` | [FiringSequence](#firingsequence) |  | FiringSequence. |

### RotatingLidarReceiver

Receiver parameters of the rotating lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `aperture_area` | google.protobuf.DoubleValue |  | Aperture area of the receiver.<br>Unit: square meters (m^2) |
| `photo_detector` | [PhotoDetector](#photodetector) |  | PhotoDetector. |
| `processor` | [LidarProcessor](#lidarprocessor) |  | LidarProcessor. |

### IntensityFileType

The available types of intensity file.

| Name | Number | Description |
| ---- | ------ | ----------- |
| IES | 0 | Ies file (default type). |
| INTENSITY | 1 | Intensity file. |
| XMP | 2 | XMP file |

### PulseShape

The possible shapes of the emitted laser pulse.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE_PULSE_SHAPE | 0 |  |
| GAUSSIAN | 1 |  |
| RECTANGULAR | 2 |  |
| TRIANGULAR | 3 |  |

## ansys/api/avxcelerate/sensors/v1/feedback_control/feedback_control_radar_parameters.proto

This file describes the messages used to alter some radar parameters during the simulation execution.

### ArbitraryChirp

Arbitrary Chirp.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `center_frequency` | double |  | Center frequency of the analog-to-digital converter.<br>Unit: hertz (Hz). |
| `sampling_rate` | double |  | Sampling frequency of the analog-to-digital converter.<br>Unit: hertz (Hz). |
| `number_of_samples_per_chirp` | int32 |  | Number of samples per chirp. |
| `chirp_interval` | double |  | Time interval between subsequent chirps.<br>Unit: seconds (s).<br>Note: This parameter impacts the frame rate. |

### ArbitraryPulse

Arbitrary pulse.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `center_frequency` | double |  | Center frequency of the analog-to-digital converter.<br>Unit: hertz (Hz) |
| `bandwidth` | double |  | Bandwidth.<br>Unit: hertz (Hz) |
| `number_of_frequency_samples_per_pulse` | int32 |  | Number of frequency samples per pulse. |
| `pulse_interval` | double |  | Time interval between two subsequent pulses.<br>Unit: seconds (s)<br>Note: This parameter impacts the frame rate. |

### ArbitrarySystemFrequencyModulatedContinuousWaveform

Arbitrary system frequency modulated continuous waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `chirp_sequence` | [ArbitraryChirp](#arbitrarychirp) | repeated | List of chirp definitions. |
| `ramp_rate` | google.protobuf.DoubleValue |  | Ramp rate. |
| `rx_components` | [RxComponents](#rxcomponents) |  | RxComponents. |

### ArbitrarySystemPulseDopplerWaveform

Arbitrary system pulse doppler waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `pulse_sequence` | [ArbitraryPulse](#arbitrarypulse) | repeated | List of pulse definitions. |

### DeviceAntenna

Parameters to be updated for a radar antenna.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | Identifier of the antenna. <br>To be considered as a key to modify an existing antenna.<br>Note: Adding or removing antennas through feedback control is not allowed. |
| `position` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Position of the antenna relative to the radar device's position.<br>Unit: meters (m) |
| `orientation` | [ansys.api.avxcelerate.sensors.v1.EulerAngles](#eulerangles) |  | Orientation of the antenna relative to the radar device's orientation.<br>Unit: radians (rad) |

### FeedbackControlRadarParameters

Update to one or several parameters of a radar sensor during the simulation.

This messages contains the parameter(s) to be updated.

Note: At least one parameter must be provided at each call.

Note: The changes are not directly applied to the radar. First, the update will be sent to the radar at the next world update (requested using the `Update` method of the Simulation service). Then, the radar will be reloaded so that the updated parameter(s) are used for the next output calculation. However, a radar cannot be reloaded during an ongoing output calculation, it can be reloaded only after the computation is completed.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `tx_antennas` | [DeviceAntenna](#deviceantenna) | repeated | List of Tx antennas to be updated. |
| `rx_antennas` | [DeviceAntenna](#deviceantenna) | repeated | List of Rx antennas to be updated. |
| `modes` | [Mode](#mode) | repeated | List of the modes to be updated. |

### FlatWindow

Flat window model.

### FrequencyModulatedContinuousWaveform

Frequency modulated continuous waveform.

Indicates which frequency modulated continuous waveform model is chosen.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>model</code></small> `system_frequency_modulated_continuous_waveform` | [SystemFrequencyModulatedContinuousWaveform](#systemfrequencymodulatedcontinuouswaveform) |  | SystemFrequencyModulatedContinuousWaveform. |
| <small><strong>oneof</strong> <code>model</code></small> `performance_frequency_modulated_continuous_waveform` | [PerformanceFrequencyModulatedContinuousWaveform](#performancefrequencymodulatedcontinuouswaveform) |  | PerformanceFrequencyModulatedContinuousWaveform. |
| <small><strong>oneof</strong> <code>model</code></small> `arbitrary_system_frequency_modulated_continuous_waveform` | [ArbitrarySystemFrequencyModulatedContinuousWaveform](#arbitrarysystemfrequencymodulatedcontinuouswaveform) |  | ArbitraryFrequencyModulatedContinuousWaveform. |

### HammingWindow

Hamming window model.

### HannWindow

Hann window model.

### Mode

Parameters to be updated for a radar mode.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | Identifier of the mode. <br>To be considered as a key to modify an existing mode.<br>Note: Adding or removing mode through feedback control is not allowed. |
| `waveform` | [Waveform](#waveform) |  | Waveform. |
| `range_doppler_processor` | [RadarProcessor](#radarprocessor) |  | RadarProcessor. |
| `start_delay` | google.protobuf.DoubleValue |  | Latency between the start of the frame and the first pulse or chirp sent by the mode's CPI.<br>Note: This parameter impacts the frame rate. |
| `tx_antenna_ids` | int32 | repeated | List of the transmitting antenna IDs to use in this mode. |
| `rx_antenna_ids` | int32 | repeated | List of the receiving antenna IDs to use in this mode. |
| `activate_mode` | google.protobuf.BoolValue |  | Activation or deactivation of the mode. |
| `Gain` | google.protobuf.DoubleValue |  | Gain. <br>Negative values correspond to a loss and positive values correspond to an amplification, 0 being neutral.<br>Unit: dB<br>Note: If no value is set, previous gain type and value are kept. <br>If a value is set, the new value is applied in Manual type whatever the previous type (Automatic or Manual). |
| `Noise` | google.protobuf.DoubleValue |  | Noise standard deviation.<br>Unit: dBW<br>Note: If a value is set, noise is activated and value is applied. |
| `tx_weighting` | [TxWeighting](#txweighting) |  | TxWeighting. |
| <small><strong>oneof</strong> <code>phase_noise</code></small> `pedestal_parametric_phase_noise` | [PedestalParametricPhaseNoise](#pedestalparametricphasenoise) |  | Phase noise defined as a pedestal parametric model. |
| <small><strong>oneof</strong> <code>phase_noise</code></small> `piecewise_linear_phase_noise` | [PiecewiseLinearPhaseNoise](#piecewiselinearphasenoise) |  | Phase noise defined as a piecewise linear model, using a sequence of power spectral densities. |
| `range_filter_1` | [RangeFilter](#rangefilter) |  | The parameters of the first range filter. <br>Note: This parameter only applies to radars with a range filter. |
| `range_filter_2` | [RangeFilter](#rangefilter) |  | The parameters of the second range filter.<br>Note: This parameter only applies to radars with two range filters. |

### PedestalParametricPhaseNoise

Parameters of the phase noise when it is defined by a linear function.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `pedestal_power` | double |  | Pedestal peak.<br>Unit: dBc/Hz (decibels relative to the carrier)<br>Range: [-double max, 0] |
| `pedestal_width` | double |  | Pedestal width.<br>Unit: hertz (Hz)<br>Range: strictly positive |
| `roll_off_order` | double |  | Roll-off order.<br>Unit: No unit<br>Range: ]1, double max] (generally between 2 and 4) |

### Performance

Parameters of the performance pulse doppler waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range_resolution` | google.protobuf.DoubleValue |  | Target range resolution of the output frame. <br>Unit: meters (m) |
| `velocity_resolution` | google.protobuf.DoubleValue |  | Target velocity resolution of the output frame.<br>Unit: meters per seconds (m/s)<br>Note: This parameter impacts the frame rate. |
| `range_ambiguity` | google.protobuf.DoubleValue |  | Maximum unambiguous range or range period.<br>Unit: meters (m) |
| `velocity_ambiguity` | google.protobuf.DoubleValue |  | Maximum unambiguous velocity or velocity period.<br>Unit: meters per seconds (m/s)<br>Note: This parameter impacts the frame rate. |

### PerformanceFrequencyModulatedContinuousWaveform

Performance frequency modulated continuous waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sampling_rate` | google.protobuf.DoubleValue |  | Sampling frequency of the analog-to-digital converter.<br>Unit: hertz (Hz) |
| `performance` | [Performance](#performance) |  | Performance. |
| `rx_components` | [RxComponents](#rxcomponents) |  | RxComponents. |

### PerformancePulseDopplerWaveform

Performance pulse doppler waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `performance` | [Performance](#performance) |  | Performance. |

### PiecewiseLinearPhaseNoise

Parameters of the phase noise when it is defined as a sequence of power spectral densities.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `power_spectral_densities` | [PowerSpectralDensityEntry](#powerspectraldensityentry) | repeated | List of power spectral density entries.<br>A power spectral density entry consists of one frequency offset and one power spectral density.<br>Note: The list must contain at least two entries.<br>Note: The frequency offsets should be unique and in ascending order. |

### PowerSpectralDensityEntry

Power spectral densities at given frequency offsets.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `frequency_offset` | double |  | The frequency offset.<br>Unit: hertz (Hz)<br>Range: strictly positive |
| `power_spectral_density` | double |  | The power spectral density.<br>Unit: decibel (dB)<br>Range: [-double max, 0] |

### PulseDopplerWaveform

Pulse doppler waveform.

Indicates which pulse doppler waveform model is chosen.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>model</code></small> `system_pulse_doppler_waveform` | [SystemPulseDopplerWaveform](#systempulsedopplerwaveform) |  | SystemPulseDopplerWaveform. |
| <small><strong>oneof</strong> <code>model</code></small> `performance_pulse_doppler_waveform` | [PerformancePulseDopplerWaveform](#performancepulsedopplerwaveform) |  | PerformancePulseDopplerWaveform. |
| <small><strong>oneof</strong> <code>model</code></small> `arbitrary_system_pulse_doppler_waveform` | [ArbitrarySystemPulseDopplerWaveform](#arbitrarysystempulsedopplerwaveform) |  | ArbitrarySystemPulseDopplerWaveform |

### RadarProcessor

Radar processor parameters.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range_pixels` | google.protobuf.Int32Value |  | Range resolution of the output range doppler map image. |
| `velocity_pixels` | google.protobuf.Int32Value |  | Velocity resolution of the output range doppler map image. |
| `range_window` | [Window](#window) |  | Range window of the output range doppler map image. |
| `velocity_window` | [Window](#window) |  | Velocity window of the output range doppler map image. |
| `center_velocity` | google.protobuf.DoubleValue |  | Center value of the velocity range. |

### RangeFilter

Range filter parameters.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range_cutoff` | double |  | The range cutoff. Defines the range where the magnitude of the filter transfer function is 1/sqrt(2) or -3 dB.<br>Unit: meter (m)<br>Range: strictly positive |
| <small><strong>oneof</strong> <code>roll_off</code></small> `roll_off_order` | int32 |  | The roll-off order, associated to the Order type.<br>Range: [1, 50] |
| <small><strong>oneof</strong> <code>roll_off</code></small> `roll_off_point` | [RollOffPoint](#rolloffpoint) |  | The roll-off definition, associated to the Set Point type. |

### RollOffPoint

The parameters of a roll-off whose type is Set Point.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range_stop` | double |  | The range stop. Range beyond which Stop Level attenuation must be met or exceeded.<br>Unit: meter (m)<br>Range: strictly positive. For low-pass filters, it must be greater than the value set for the `range_cutoff`. For high-pass filters, it must be less than the value set for the `range_cutoff`. |
| `stop_level` | double |  | The stop level. Attenuation level that must be met or exceeded for ranges further into the stop band beyond the stop range.<br>Unit: decibel (dB)<br>Range: strictly negative |

### SystemFrequencyModulatedContinuousWaveform

System frequency modulated continuous waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `bandwidth` | google.protobuf.DoubleValue |  | Frequency bandwidth of the waveform.<br>Unit: hertz (Hz) |
| `sampling_rate` | google.protobuf.DoubleValue |  | Sampling frequency of the analog-to-digital converter.<br>Unit: hertz (Hz) |
| `number_of_samples_per_chirp` | google.protobuf.Int32Value |  | Number of samples per chirp. |
| `chirp_interval` | google.protobuf.DoubleValue |  | Time interval between subsequent chirps, equal to the inverse of the chirp repetition frequency.<br>Unit: seconds (s)<br>Note: This parameter impacts the frame rate. |
| `number_of_chirps_in_coherent_processing_interval` | google.protobuf.Int32Value |  | Number of chirps in one coherent processing interval (CPI).<br>Note: This parameter impacts the frame rate. |
| `rx_components` | [RxComponents](#rxcomponents) |  | RxComponents. |

### SystemPulseDopplerWaveform

System pulse doppler waveform.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `bandwidth` | google.protobuf.DoubleValue |  | Frequency bandwidth of the waveform.<br>Unit: hertz (Hz) |
| `number_of_frequency_samples` | google.protobuf.Int32Value |  | Number of frequency samples. |
| `pulse_interval` | google.protobuf.DoubleValue |  | Time interval between two subsequent pulses, equal to the inverse of the pulse frequency.<br>Unit: seconds (s)<br>Note: This parameter impacts the frame rate. |
| `number_of_pulses_in_coherent_processing_interval` | google.protobuf.Int32Value |  | Number of pulses in one coherent processing interval (CPI).<br>Note: This parameter impacts the frame rate. |

### TaylorWindow

Taylor window model.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `side_lobe_level` | double |  | Ratio of the main peak value to the side-lobe peak. |

### TxWeighting

Represents radar weighting sequences.

Note: When adjusting the weighting sequence via the feedback control, be sure to update each parameter of the sequence to keep it consistent.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>txWeightings</code></small> `weightings_by_transmitter` | [WeightingByTransmitter](#weightingbytransmitter) |  | WeightingByTransmitter. |
| <small><strong>oneof</strong> <code>txWeightings</code></small> `weightings_by_pulses_or_chirps` | [WeightingByPulsesOrChirps](#weightingbypulsesorchirps) |  | WeightingByPulsesOrChirps. |

### Waveform

Waveform model.

Indicates which waveform model is chosen.

Note: Changing the waveform model during the simulation is not allowed. If you do so, the message will be rejected.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>model</code></small> `pulse_doppler_waveform` | [PulseDopplerWaveform](#pulsedopplerwaveform) |  | PulseDopplerWaveform. |
| <small><strong>oneof</strong> <code>model</code></small> `frequency_modulated_continuous_waveform` | [FrequencyModulatedContinuousWaveform](#frequencymodulatedcontinuouswaveform) |  | FrequencyModulatedContinuousWaveform. |

### Weighting

Represents a single weighting value with real and imaginary parts.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `real_part` | double |  | Real part of the complex weighting. |
| `imaginary_part` | double |  | Imaginary part of the complex weighting. |

### WeightingByPulsesOrChirps

Represents weightings described by pulses or chirps.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `weightings_by_transmitter` | [WeightingByTransmitter](#weightingbytransmitter) | repeated | List of weightings by transmitter for each pulse or chirp. |

### WeightingByTransmitter

Represents weightings described by the transmitter.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `weightings` | [Weighting](#weighting) | repeated | List of weightings for each antenna or transmitter. |

### Window

Window.

Indicates which window model is chosen.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>model</code></small> `flat_window` | [FlatWindow](#flatwindow) |  | FlatWindow. |
| <small><strong>oneof</strong> <code>model</code></small> `hamming_window` | [HammingWindow](#hammingwindow) |  | HammingWindow. |
| <small><strong>oneof</strong> <code>model</code></small> `hann_window` | [HannWindow](#hannwindow) |  | HannWindow. |
| <small><strong>oneof</strong> <code>model</code></small> `taylor_window` | [TaylorWindow](#taylorwindow) |  | TaylorWindow. |

### RxComponents

The possible types of mixing for the comparison of emitted signal vs received signal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE_RXCOMPONENTS | 0 |  |
| IN_PHASE | 1 |  |
| IN_PHASE_AND_QUADRATURE | 2 |  |

## ansys/api/avxcelerate/sensors/v1/geometry.proto

This file describes the geometric messages used in other messages of the API.

### EulerAngles

Euler angles.

Note: In AVX convention, yaw is the rotation around the Y axis, pitch is the rotation around the X axis and roll is the rotation around the Z axis.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `yaw` | double |  | The rotation around the Y axis. |
| `pitch` | double |  | The rotation around the X axis. |
| `roll` | double |  | The rotation around the Z axis. |

### Vector3D

Vector in a 3D referential.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | double |  | Value on the X axis. |
| `y` | double |  | Value on the Y axis. |
| `z` | double |  | Value on the Z axis. |

## ansys/api/avxcelerate/sensors/v1/ground_truth_access/camera_ground_truth.proto

This file describes the message related to camera ground truth data.

### PixelSegmentationTagColorMap

Mapping table of tags and colors used in the simulation for the pixel segmentation camera output.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `tag_color_map` | [map PixelSegmentationTagColorMap-TagColorMapEntry](#pixelsegmentationtagcolormap-tagcolormapentry) | repeated | The tag-color mapping table.<br>Key [string]: The name of the tag.<br>Value [Color]: The RGB color. |
| `status` | [ansys.api.avxcelerate.sensors.v1.Status](#status) |  | The status of the request |

### PixelSegmentationTagColorMap-TagColorMapEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | string |  |  |
| `value` | [ansys.api.avxcelerate.sensors.v1.Color](#color) |  |  |

## ansys/api/avxcelerate/sensors/v1/ground_truth_access/contribution_dictionary.proto

This file describes the messages related to the Contribution dictionary, a table linking the entity IDs in the contribution output to the asset information.

### AssetDescription

Description of the asset linked to the entity ID.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `instance_name` | string |  | The name of the simulation instance using the asset. |
| `asset_path` | string |  | The path to the asset loaded in the AVX simulation. |

### ContributionDictionary

Dictionary used to relate each entity ID in the contribution output to the description of the asset and its nodes.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `items` | [EntityContributionDescription](#entitycontributiondescription) | repeated | The collection of items relating the entity ID from the contribution output to the asset information. |
| `status` | [ansys.api.avxcelerate.sensors.v1.Status](#status) |  | The status of the request. |

### EntityContributionDescription

Description of the mesh node, its parent nodes and the asset linked to the entity ID.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `EntityID` | [uint32](#uint32) |  | The ID of the entity in the simulation. |
| `asset_description` | [AssetDescription](#assetdescription) |  | The description of the asset. |
| `node_hierarchy` | [NodeDescription](#nodedescription) | repeated | The list of descriptions of the mesh node and all its parents. |
| `mesh_description` | [MeshDescription](#meshdescription) |  | The description of the mesh. |

### MeshDescription

Description of the mesh associated with the entity ID.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `mesh_part_name` | string |  | The name of the mesh part associated with the entity ID. |
| `material_path` | string |  | The path to the material part used by the mesh part. |
| `mesh_name` | string |  | The name of the mesh associated with the entity ID. |

### NodeDescription

Description of a node linked to the entity ID.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | string |  | The name of the node in the simulation. |
| `tags` | [TagDescription](#tagdescription) | repeated | The tag(s) associated with the node. |

### SensorIdentifier

The identifier of the sensor as defined in the sensor configuration.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sensor_id` | string |  | The identifier of the sensor. |

### TagDescription

Description of the tag associated with the entity ID.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `tag` | string |  | The name of the tag applied to the node in the asset. |
| `label` | string |  | The additional tag label applied to the node in the asset. |

## ansys/api/avxcelerate/sensors/v1/ground_truth_access/ground_truth_data_helper.proto

This file describes the service used to get auxiliary information about sensor ground truth data.

### GroundTruthDataHelper

Ground Truth Data Helper Service

This service provides the procedures to acquire ground truth auxiliary information.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetContributionDictionary | [SensorIdentifier](#sensoridentifier) | [ContributionDictionary](#contributiondictionary) | Requests a dictionary which offers the possibility to relate IDs in the contribution output of the lidar specified in the request message to the asset information. |
| GetPixelSegmentationTagColorMap | .google.protobuf.Empty | [PixelSegmentationTagColorMap](#pixelsegmentationtagcolormap) | Requests the mapping table of tags and colors used in the simulation for the pixel segmentation camera output. |

## ansys/api/avxcelerate/sensors/v1/lighting_system_control/lighting_system.proto

This file describes the service used to manage Lighting Systems.

### LightingSystem

Lighting System Service

This service provides the procedure to define the Lighting System to set as active.

Note: The changes will be applied at the next world update (requested using the `Update` method of the Simulation service).

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Switch | [.ansys.api.avxcelerate.sensors.v1.ObjectIdentifier](#objectidentifier) | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Changes the active Lighting System to the one defined as input parameter. |

## ansys/api/avxcelerate/sensors/v1/lighting_system_control/lighting_system_control.proto

This file describes the service used to implement a lighting system control.

### LightingSystemControl

Lighting System Control Service

This service provides the procedures to retrieve and update the position and orientation of each projector and module contained in a Lighting System, as well as the flux and light functions of each lamp contained in a module.

Note: The changes will be applied at the next world update (requested using the `Update` method of the Simulation service).

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Set | [LightingSystemState](#lightingsystemstate) | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Updates some properties of a Lighting System's components, such as the position or orientation of projectors or modules, or the flux or light functions of lamps.<br>Note: Only the components and properties specified in the `LightingSystemState` message will be updated.<br>Returns an error if any of the names provided in the request (in the `LightingSystemState` message) does not exist, or in case of errors in the parameters to update (for example when a provided value is out of range).<br>Returns a success status when the content of the request (in the `LightingSystemState` message) is valid. The changes will then be applied to the simulation at the next world update. |
| Get | [LightingSystemName](#lightingsystemname) | [TimeStampedLightingSystemState](#timestampedlightingsystemstate) | Requests the current state of a given Lighting System defined by its name.<br>Returns the state of the Lighting System at a specific simulation time. |

## ansys/api/avxcelerate/sensors/v1/lighting_system_control/lighting_system_state.proto

This file describes the messages used to retrieve and control Lighting System parameters during the simulation execution.

### LampState

Message containing the state of a lamp.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `lamp_name` | string |  | Unique user-defined name of the lamp in the module. |
|  </small> `flux` | double | optional | Flux of the lamp.<br>Unit: lumens (lm) |
| `light_functions_tags` | [LightFunctionTags](#lightfunctiontags) |  | Light functions tags. |

### LightFunctionTags

Message containing the light function tag(s) of a lamp.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `light_functions` | string | repeated | Light functions. |

### LightingSystemName

Name of the Lighting System.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | string |  | Unique user-defined name of the Lighting System in the simulation. |

### LightingSystemState

This message contains lighting system parameters.

Note: When this message is returned by the `Get` procedure, it includes all the current properties of the Lighting System. When this message is used as input of the `Set` procedure, it should include the name to identify the Lighting System to update as well as the parameter(s) to be updated.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `lighting_system_name` | [LightingSystemName](#lightingsystemname) |  | Name of the Lighting System. |
| `projectors_state` | [ProjectorState](#projectorstate) | repeated | List of projectors contained in the Lighting System. |

### ModuleState

Message containing the state of a module.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `module_name` | string |  | Unique user-defined name of the module in the projector. |
| `lamps_state` | [LampState](#lampstate) | repeated | List of lamps contained in this module. |
| `position` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Position of the module relative to the projector.<br>Unit: meters (m) |
| `orientation` | [ansys.api.avxcelerate.sensors.v1.EulerAngles](#eulerangles) |  | Orientation of the module relative to the projector.<br>Unit: degrees |
| `pixel_beam_state` | [PixelBeamState](#pixelbeamstate) |  | Definition of the pixel beam. |

### PixelBeamState

Message containing the state of the pixel beam associated with the module.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `mask` | float | repeated | The float array representing the pixel beam mask, each entry representing a pixel light intensity multiplier. <br>An empty mask means the pixel beam is set to 0. <br>The size of the mask must be aligned with the mask resolution (width x height).<br>Range: [0, float max] |
|  </small> `hmin` | float | optional | Minimal horizontal angle corresponding to the bottom border of the pixel beam area.<br>Unit: degrees<br>Range: [-180, `hmax`[ |
|  </small> `hmax` | float | optional | Maximal horizontal angle corresponding to the top border of the pixel beam area.<br>Unit: degrees<br>Range: ]`hmin`, 180] |
|  </small> `vmin` | float | optional | Minimal vertical angle corresponding to the left border of the pixel beam area.<br>Unit: degrees<br>Range: [-90, `vmax`[ |
|  </small> `vmax` | float | optional | Maximal vertical angle corresponding to the right border of the pixel beam area.<br>Unit: degrees<br>Range: ]`vmin`, 90] |
|  </small> `width` | int32 | optional | Horizontal resolution expressed in pixels.<br>Range: ]0, 3840] |
|  </small> `height` | int32 | optional | Vertical resolution expressed in pixels.<br>Range: ]0, 2160] |

### ProjectorState

Message containing the state of a projector.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `projector_name` | string |  | Unique user-defined name of the projector in the Lighting System. |
| `modules_state` | [ModuleState](#modulestate) | repeated | List of modules contained in this projector. |
| `position` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Position of the projector relative to the Lighting System origin.<br>Unit: meters (m) |
| `orientation` | [ansys.api.avxcelerate.sensors.v1.EulerAngles](#eulerangles) |  | Orientation of the projector relative to the Lighting System origin.<br>Unit: degrees |

### TimeStampedLightingSystemState

State of a Lighting System at a specific simulation time.

Note: This message is the return of the `Get` procedure of the Lighting System Control service.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `lighting_system_state` | [LightingSystemState](#lightingsystemstate) |  | The state of the Lighting System. |
| `simulation_time` | google.protobuf.Duration |  | The simulation time. |

## ansys/api/avxcelerate/sensors/v1/object_identifier.proto

This file describes the message used to identify an object.

### ObjectIdentifier

Unique identifier of a simulation object.

It applies to vehicles, pedestrians, static objects (e.g. road signs) or Lighting Systems.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `id` | string |  | Unique identifier of the associated object.<br>Note: The identifier is case-sensitive. |

## ansys/api/avxcelerate/sensors/v1/resource_identifier.proto

This file describes the message used to identify a resource.

### ResourceIdentifier

Defines the unique identifier of any resource for the simulation.

It applies to track, assets (vehicles, pedestrians, static objects), sensors or Lighting Systems.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `id` | string |  | The unique string that identifies the resource.<br>Note: Most of the time, the expected value is the full file name and path of the resource. |

## ansys/api/avxcelerate/sensors/v1/sensor_data/camera_output_data.proto

This file describes the messages used for the camera output data.

### BoundingBox2D

2D bounding box data including coordinates defining its position in the image frame and the tag and label associated with the object.

A 2D bounding box corresponds to the projection of 3D bounding box on the camera image plane.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x_min` | int32 |  | x min pixel coordinates. |
| `y_min` | int32 |  | y min pixel coordinates. |
| `x_max` | int32 |  | x max pixel coordinates. |
| `y_max` | int32 |  | y max pixel coordinates. |
| `tag_name` | string |  | Tag associated with the object during the data preparation. |
| `label` | string |  | Label associated with the object during the data preparation. |
| `x_center` | int32 |  | Position of the bounding box center on the x axis. |
| `y_center` | int32 |  | Position of the bounding box center on the y axis. |
| `z_center` | float |  | Normalized depth of the bounding box center. |

### BoundingBox3D

3D bounding box data including coordinates in the world reference frame.

Note: The 3D Bounding Box is delivered as a beta feature in the current release.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `isobarycenter` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Isobarycenter coordinates in the camera reference frame.<br>Unit: meters (m) |
| `dimensions` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Dimension of the object in the world reference frame.<br>Unit: meters (m) |
| `orientation` | [ansys.api.avxcelerate.sensors.v1.EulerAngles](#eulerangles) |  | Orientation of the object in the camera reference frame.<br>Unit: radians (rad) |
| `tag_name` | string |  | Tag associated with the object during the data preparation. |

### CameraGroundTruthData

Camera data for ground truth output.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `camera_format` | [ansys.api.avxcelerate.sensors.v1.CameraGroundTruthDataFormat](#cameragroundtruthdataformat) |  | Format of the ground truth data. |
| `camera_data` | bytes |  | Byte array containing the ground truth data. |

### CameraImageData

Camera data for image output.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `camera_format` | [ansys.api.avxcelerate.sensors.v1.CameraDataFormat](#cameradataformat) |  | Type of image produced by the camera.<br>Can be one of the following: `RAW`, `TEMPERATURE_MAP`, `SPECTRAL_IRRADIANCE_MAP` or `CUSTOM_DATA`. |
| `camera_data` | bytes |  | Byte array containing the image.<br>Note: For the special case of `TEMPERATURE_MAP`, the `camera_data` message contains the temperature map as a string organized with one float value per pixel and one line of text per line in the image. |

### CameraLensOutput

Spectral irradiance map produced by the lens of the camera sensor and associated auxiliary information.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `resolution` | [CameraResolution](#cameraresolution) |  | Resolution of the imager. |
| `spectral_sampling` | [SpectralSampling](#spectralsampling) |  | Spectral sampling. |
| `camera_data` | float | repeated | Float array containing the spectral irradiance data.<br>The number of irradiance values is equal to the product of the number of wavelengths times the number of pixels in the imager: <br>Nb_E = [nb_spectral_samples * nb_vertical_pixels * nb_horizontal_pixels]<br>The received data consists of 8 spectral values per pixel, starting from the upper left corner of the image, line per line.<br>8 spectral values for pixel0 (vertical_coordinate0;horizontal_coordinate0) 8 spectral values for pixel1 (vertical_coordinate0;horizontal_coordinate1)<br>...<br>Unit: watts per square meter per nanometer (W/m^2/nm). |

### CameraResolution

Resolution of the imager in number of pixels.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `width` | int32 |  | Width of the imager sensor in number of pixels. |
| `height` | int32 |  | Height of the imager sensor in number of pixels. |

### SpectralSampling

The spectral sampling.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `wavelength` | [Wavelength](#wavelength) | repeated | The list of wavelengths constituting the spectral sampling.<br>The list contains at least one wavelength. If it includes several wavelengths, they are provided in ascending order. |

### Wavelength

The wavelength representation.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `value` | double |  | The value of the wavelength.<br>Unit: meters (m). |

## ansys/api/avxcelerate/sensors/v1/sensor_data/lidar_output_data.proto

This file describes the messages used for the lidar output data.

### Contribution

The contribution per contributor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [uint32](#uint32) |  | Identifier of a contributor (the material part the lidar encountered during the simulation).<br>Note: This identifier is automatically generated for each material part during the data preparation. |
| `weight` | float |  | The contribution ratio of the associated material part.<br>Note: The ratio is expressed as a float value comprised between [0 ; 1]. |

### ContributionData

Lidar contribution output data.

For each point of the point cloud, the contribution data contains the ID of each contributor and its contribution ratio.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `contributions` | [Contributions](#contributions) | repeated | An array of Contributions. |

### Contributions

Group of contributions for each point of the point cloud.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `contributions` | [Contribution](#contribution) | repeated | An array of lidar Contribution. |

### LensOutputData

Radiant flux data.

Note: Lens output data are stored sequentially.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `waveform_length` | int32 |  | The number of values for each sample. |
| `data` | float | repeated | All the radiant flux values for all the samples. |

### LidarOutputData

Output data produced by a lidar sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `point_clouds` | [PointCloudData](#pointclouddata) |  | Point Cloud data produced by a lidar sensor. |
| `waveforms` | [WaveformData](#waveformdata) |  | Digital Waveform data produced by a lidar sensor. |
| `contributions` | [ContributionData](#contributiondata) |  | Contribution list data. |
| `lens_output` | [LensOutputData](#lensoutputdata) |  | Radiant Flux data produced by a lidar sensor configured to generate "Lens Output (Radiant Flux)". |

### PointCloud

Point cloud data for one lidar return.

Each point is defined by 4 float values defining its position (x, y, z) and its intensity.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | float | repeated |  |

### PointCloudData

Array of lidar point cloud data.

Note: There is one point-cloud data for each lidar return.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `point_clouds` | [PointCloud](#pointcloud) | repeated |  |

### WaveformData

Digital Waveform data.

Note: Digital waveforms are stored sequentially. Each single waveform data has length.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `waveform_length` | int32 |  | The number of values contained in a single digital waveform. |
| `data` | float | repeated | All the intensity values for all the waveforms. |

## ansys/api/avxcelerate/sensors/v1/sensor_data/radar_output_data.proto

This file describes the messages used for the radar output data.

### AnalogToDigitalConverterSamplesData

The radar output data for analog-to-digital converter samples. 

Data are stored as multi-dimensional array of complex values or real values, depending on the `is_complex_valued` flag in the message. The physical dimensions are [TX, RX, chirp time, sample time], therefore the data contains:

 numTX x numRX x numChirpTime x numSampleTime complex numbers

or equivalently

 2 x numTX x numRX x numChirpTime x numSampleTime real numbers

If the complex data is read sequentially, the outermost loop corresponds to the TX dimension, then RX, then chirp time, and then sample time which is the innermost.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | float | repeated | The multi-dimensional array. |
| `sample_time_domain` | [Domain](#domain) |  | The number of time samples and the min/max values in the samples. |
| `chirp_time_domain` | [Domain](#domain) |  | The number of chirp time samples and the min/max values in the samples. |
| `rx_identifiers` | int32 | repeated | The identifier of each receiver antenna. |
| `tx_identifiers` | int32 | repeated | The identifier of each transmitter antenna. |
| `is_complex_valued` | bool |  | Flag indicating whether or not the values are defined as complex numbers. |
| `multiplexing` | [Multiplexing](#multiplexing) |  | The type of multiplexing. |

### ArbitraryAnalogToDigitalConverterSamplesData

The radar output data for Arbitrary analog-to-digital converter samples.

Data are stored as multi-dimensional array of complex values or real values, depending of the is_complex_valued flag of the message. The physical dimensions are [TX, RX, Sample] and so the data contains:

 numberOfTX x numberOfRX x numberOfSamples complex numbers

 or equivalently

 2 x numberOfTX x numberOfRX x numberOfSamples real numbers

If the complex data is read sequentially, the outermost loop corresponds to the TX dimension, then RX dimension, then Sample dimension which is the innermost.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | float | repeated | The multi-dimensional array. |
| `number_of_samples` | int32 |  | The number of samples. |
| `rx_identifiers` | int32 | repeated | The identifier of each receiver antenna. |
| `tx_identifiers` | int32 | repeated | The identifier of each transmitter antenna. |
| `is_complex_valued` | bool |  | Flag indicating whether or not the values are defined as complex numbers. |
| `multiplexing` | [Multiplexing](#multiplexing) |  | Type of multiplexing. |

### ArbitraryFrequencyPulseResponseData

The radar output data for Arbitrary pulse frequency response.

Data are stored as multi-dimensional array of complex values, with interleaved real and imaginary parts: real1, imag1, real2, imag2 etc. The physical dimensions are [TX, RX, Sample], therefore the data contains:

 numberOfTX x numberOfRX x numberOfSamples complex numbers

 or equivalently

 2 x numberOfTX x numberOfRX x numberOfSamples real numbers

If the complex data is read sequentially, the outermost loop corresponds to the TX dimension, then RX dimension, then Sample dimension which is the innermost.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | float | repeated | The multi-dimensional array. |
| `number_of_samples` | int32 |  | The number of samples. |
| `rx_identifiers` | int32 | repeated | The identifier of each receiver antenna. |
| `tx_identifiers` | int32 | repeated | The identifier of each transmitter antenna. |
| `multiplexing` | [Multiplexing](#multiplexing) |  | The type of multiplexing. |

### Domain

A radar data domain. 

Indicates how to retrieve information from the float array of the containing data message.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `size` | int32 |  | The number of samples for this domain. |
| `min_value` | double |  | The minimal value in the samples. |
| `max_value` | double |  | The maximal value in the samples. |

### FrequencyPulseResponseData

The radar output data for pulse frequency response. 

Data are stored as multi-dimensional array of complex values, with interleaved real and imaginary parts: real1, imag1, real2, imag2 etc. The physical dimensions are [TX, RX, pulse time, frequency], therefore the data contains:

 numTX x numRX x numPulseTime x numFrequencies complex numbers

or equivalently

 2 x numTX x numRX x numPulseTime x numFrequencies real numbers

If the complex data is read sequentially, the outermost loop corresponds to the TX dimension, then RX, then pulse time, and then frequencies which is the innermost.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | float | repeated | The multi-dimensional array. |
| `frequency_domain` | [Domain](#domain) |  | The number of frequency samples and the min/max values in the samples. |
| `pulse_time_domain` | [Domain](#domain) |  | The number of pulse time samples and the min/max values in the samples. |
| `rx_identifiers` | int32 | repeated | The identifier of each receiver antenna. |
| `tx_identifiers` | int32 | repeated | The identifier of each transmitter antenna. |
| `multiplexing` | [Multiplexing](#multiplexing) |  | The type of multiplexing. |

### ModeOutputData

Radar output data for a given mode.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range_doppler_response` | [RangeDopplerResponseData](#rangedopplerresponsedata) |  | Range Doppler Map data. |
| `frequency_pulse_response` | [FrequencyPulseResponseData](#frequencypulseresponsedata) |  | Pulse Frequency Response data. |
| `analog_to_digital_converter_samples` | [AnalogToDigitalConverterSamplesData](#analogtodigitalconvertersamplesdata) |  | Analog-To-Digital Converter Samples data. |
| `mode_identifier` | int32 |  | Identifier of the radar mode. |
| `tx_waveform` | [TxWaveformData](#txwaveformdata) |  | Tx Waveform Data. |
| `arbitrary_frequency_pulse_response` | [ArbitraryFrequencyPulseResponseData](#arbitraryfrequencypulseresponsedata) |  | Pulse Frequency Response data produced by a radar mode configured with the "Arbitrary Pulse Doppler" waveform. |
| `arbitrary_analog_to_digital_converter_samples` | [ArbitraryAnalogToDigitalConverterSamplesData](#arbitraryanalogtodigitalconvertersamplesdata) |  | Analog-To-Digital Converter Samples data produced by a radar mode configured with the "Arbitrary FMCW" waveform. |
| `response_to_tx_waveform_map` | [uint32](#uint32) | repeated | Response to Tx waveform map.<br>List of indexes mapping the response data to the Tx waveform data. <br> - The position in the list represents the sample index in the response data. <br> - The value in the list represents the sample index in the Tx waveform data. |

### RadarOutputData

Radar output data for all the modes.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `modes` | [ModeOutputData](#modeoutputdata) | repeated | An array of ModeOutputData. |

### RangeDopplerResponseData

The radar range doppler output data.

Data are stored as multi-dimensional array of complex values, with interleaved real and imaginary parts: real1, imag1, real2, imag2 etc. The physical dimensions are [TX, RX, velocity, range], therefore the data contains:

 numTX x numRX x numVelocities x numRanges complex numbers

 or equivalently

 2 x numTX x numRX x numVelocities x numRanges real numbers

If the complex data is read sequentially, the outermost loop corresponds to the TX dimension, then RX, then velocity, and then range which is the innermost.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | float | repeated | The multi-dimensional array. |
| `range_domain` | [Domain](#domain) |  | The number of range samples and the min/max values in the samples. |
| `velocity_domain` | [Domain](#domain) |  | The number of velocity samples and the min/max values in the samples. |
| `rx_identifiers` | int32 | repeated | The identifier of each receiver antenna. |
| `tx_identifiers` | int32 | repeated | The identifier of each transmitter antenna. |
| `multiplexing` | [Multiplexing](#multiplexing) |  | The type of multiplexing. |

### TxWaveformData

The radar output data for the transmitted waveform.

Data are stored as a multi-dimensional array of values. The physical dimensions are [pulses or chirps, samples, values per sample], therefore the data contains:

 numPulsesOrChirps x numSamples x numValuesPerSample numbers

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `data` | double | repeated | The multi-dimensional array. |
| `tx_identifiers` | int32 | repeated | The identifier of each transmitter antenna. |
| `number_of_values_per_sample` | int32 |  | The number of values for a single waveform sample.<br>Current implementation will provide nine values for each sample, organized as follows: <br> - Pulse or chirp index (0-based): the pulse/chirp position within the pulse/chirp sequence. <br> - Sample index (0-based): the sample position within a pulse/chirp. <br> - Transmitter index (0-based position): the transmitter position in the tx_identifiers list. <br> - Simulation sample time: the sample time relative to the simulation update time. Expressed in seconds (s). <br> - CPI sample time: the sample time relative to the center of CPI. <br> Expressed in seconds (s). <br> - Chirp sample time: the sample time relative to the center of chirp. <br> Expressed in seconds (s). Always zero for a pulse-Doppler waveform. <br> - Sample frequency: the frequency of sample in hertz (Hz). <br> - Amplitude: the relative broadcast amplitude of the sample, currently always unity (1). <br> - Phase: the phase of the broadcast sample relative to the signal fed to rx mixer, currently always zero (0).<br>All values are double-precision, including notionally integer values (i.e. indices).<br>Note: The number of values per sample might increase in future versions. |
| `number_of_samples` | int32 |  | The number of samples for a single pulse or chirp. |
| `number_of_pulses_or_chirps` | int32 |  | The number of pulses or chirps in the waveform. |

### Multiplexing

The possible ways a radar can use its TX antennas.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INTERLEAVED | 0 | Interleaved multiplexing. |
| SIMULTANEOUS | 1 | Simultaneous multiplexing. |

## ansys/api/avxcelerate/sensors/v1/sensor_data/sensor_data.proto

This file describes the messages containing the needed information to interpret the serialized sensor data received from AVX. A sensor data is composed of one or multiple data chunks (e.g. lidar sensor data can be composed of a point-cloud chunk, a waveforms chunk, etc.).

### CameraData

Block containing a set of camera data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `entries` | [CameraDataEntry](#cameradataentry) | repeated | List of camera data entries. |

### CameraDataEntry

A single formatted camera data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>output</code></small> `image_data` | [CameraImageData](#cameraimagedata) |  | Image produced by the camera sensor. |
| <small><strong>oneof</strong> <code>output</code></small> `ground_truth_data` | [CameraGroundTruthData](#cameragroundtruthdata) |  | Ground truth data produced for the camera sensor. |
| <small><strong>oneof</strong> <code>output</code></small> `bounding_box_2d` | [BoundingBox2D](#boundingbox2d) |  | 2D Bounding box produced. |
| <small><strong>oneof</strong> <code>output</code></small> `camera_lens_output` | [CameraLensOutput](#cameralensoutput) |  | Spectral irradiance map, which is the lens output of the camera sensor. |
| <small><strong>oneof</strong> <code>output</code></small> `camera_custom_data_output` | [CameraImageData](#cameraimagedata) |  | Custom data, which is custom data output of the camera sensor. |
| <small><strong>oneof</strong> <code>output</code></small> `bounding_box_3d` | [BoundingBox3D](#boundingbox3d) |  | 3D Bounding box produced. |

### LidarData

Block containing a set of formatted lidar data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `entries` | [LidarDataEntry](#lidardataentry) | repeated | List of lidar data entries. |

### LidarDataEntry

A single formatted lidar data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>format</code></small> `point_cloud_data` | [PointCloudData](#pointclouddata) |  | Point cloud data produced by the lidar sensor. |
| <small><strong>oneof</strong> <code>format</code></small> `waveform_data` | [WaveformData](#waveformdata) |  | Digital waveform data produced by the lidar sensor. |
| <small><strong>oneof</strong> <code>format</code></small> `contribution_data` | [ContributionData](#contributiondata) |  | Contribution List produced for the lidar sensor. |
| <small><strong>oneof</strong> <code>format</code></small> `lens_output_data` | [LensOutputData](#lensoutputdata) |  | Lens Output data produced by the lidar sensor. |

### RadarData

Block containing a set of formatted radar data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `entries` | [RadarDataEntry](#radardataentry) | repeated | List of radar data entries. |

### RadarDataEntry

A single formatted radar data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>format</code></small> `radar_data` | [RadarOutputData](#radaroutputdata) |  | RadarOutputData |

### SensorData

Structure of the data produced by a single sensor for one simulation step.

Time stamp and type of the produced sensor data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `time_stamp` | google.protobuf.Duration |  | The simulation time stamp at which the data was produced. |
| <small><strong>oneof</strong> <code>data</code></small> `camera_data` | [CameraData](#cameradata) |  | The type of data produced by the camera sensor. |
| <small><strong>oneof</strong> <code>data</code></small> `lidar_data` | [LidarData](#lidardata) |  | The type of data produced by the lidar sensor. |
| <small><strong>oneof</strong> <code>data</code></small> `radar_data` | [RadarData](#radardata) |  | The type of data produced by the radar sensor. |

## ansys/api/avxcelerate/sensors/v1/sensor_data_format.proto

This file describes the sensor data formats and types used in notifications and request messages.

### CameraDataFormat

The possible file formats and data types of the data produced by a camera.

The data types correspond to the types of image (irradiance map, temperature map, etc.) and are only used to describe images stored in shared memory.

The file formats correspond to the file format of the images (e.g. bmp, gif) and are only used to write images to disk. These data formats are therefore not available for storing data in shared memory.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED_CAMERA_FORMAT | 0 | Undefined value (default value will apply). |
| RAW | 1 | RAW format (default).<br>Note: Can be used for dumping images or describing images stored in shared memory. |
| BMP | 2 | BMP file format. |
| GIF | 3 | GIF file format. |
| JPEG | 4 | JPEG file format. |
| PNG | 5 | PNG file format. |
| TEMPERATURE_MAP | 6 | Temperature map (data type for thermal camera output). |
| SPECTRAL_IRRADIANCE_MAP | 7 | Spectral irradiance map (data type for camera lens output). |
| CUSTOM_DATA | 8 | Custom data (data type for custom GPU post-processing). |

### CameraGroundTruthDataFormat

The possible recording formats available for Ground Truth data.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED_GROUND_TRUTH_FORMAT | 0 | Undefined value. |
| DEPTH_MAP | 1 | Depth map format.<br>Represented by a byte array of 32 bits per pixel (RGBA image). |
| OPTICAL_FLOW | 2 | Optical flow format.<br>Represented by a byte array of 2 x 32 bits per pixel (horizontal speed first, then vertical speed). |
| PIXEL_SEGMENTATION | 3 | Pixel Segmentation format.<br>Represented by a byte array of 24 bits per pixel (RGB image). |

### LidarDataFormat

The possible data formats for lidar sensors' output.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED_LIDAR_FORMAT | 0 | Undefined value (default value will apply). |
| POINT_CLOUD | 1 | Point cloud data format (default value). |
| WAVEFORM | 2 | Waveform data format. |
| CONTRIBUTIONS | 3 | Contributions data format. |
| LENS_OUTPUT | 4 | Lens output data format. |

### OutputFormat

The possible recording formats available for radar and lidar sensors' output.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED | 0 | Undefined value (default will apply). |
| TEXT | 1 | Text format (default). |
| PROTOBUF | 2 | Protobuf format. |

### PixelFormat

The possible pixel formats of the data generated by a camera.

This format describes the type of data stored (byte or float) as well as how the data is arranged.

Note: In addition to the usages mentioned below, each pixel format is possible for the output of a camera with custom post-processing, based on the Custom Output Format defined in the camera model.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED_PIXEL_FORMAT | 0 | Undefined value (default value will apply). |
| RGBA32 | 1 | Rgba32 represents the sRGB format with an alpha channel and 32 bits per pixel. Each channel (red, green, blue, and alpha) is assigned 8 bits per pixel. (This is the default value.)<br>Format used for Camera Output (Image) and Imager Output (Injection) when alpha channel is enabled in the simulation parameters. |
| RGB24 | 3 | Rgb24 represents the sRGB format with 24 bits per pixel. Each channel (red, green, blue) is assigned 8 bits per pixel.<br>Format used for Camera Output (Image) and Imager Output (Injection) when alpha channel is disabled in the simulation parameters, as well as for ground truth pixel segmentation output. |
| GRAY8 | 2 | Gray8 pixel format which displays one grayscale channel with 8 bits per pixel, allowing 256 shades of gray.<br>Format used for thermal camera image output. |
| FLOAT32 | 4 | The Float32 pixel format represents a float channel with 32 bits per pixel. <br>Format used for thermal camera temperature map output and ground truth depth map output. |
| FLOAT64 | 5 | The Float64 pixel format represents 2 channels of floating point numbers with 32 bits per pixel. Each channel is assigned 32 bits per pixel.<br>Format used for ground truth optical flow output. |
| FLOAT128 | 6 | The Float128 pixel format represents 4 channels of floating point numbers with 32 bits per pixel. Each channel is assigned 32 bits per pixel.<br>Format used for Lens Output (Light). |

### RadarDataFormat

The possible data formats for radar sensors' output.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED_RADAR_FORMAT | 0 | Undefined value (default will apply). |
| RADAR_OUTPUT | 1 | Full radar output (default). |
| RANGE_DOPPLER | 2 | Range doppler data format. |
| FREQUENCY_PULSE | 3 | Frequency pulse data format. |
| DIGITAL_SAMPLES | 4 | Digital sample data format. |

## ansys/api/avxcelerate/sensors/v1/simulation/configuration.proto

This file describes the messages used to configure a simulation.

### AssetInfo

Description of an asset.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `vss_identity` | [ansys.api.avxcelerate.sensors.v1.ObjectIdentifier](#objectidentifier) |  | The unique identifier of the asset.<br>Note: The identifier is case-sensitive. |
| `resource` | [ansys.api.avxcelerate.sensors.v1.ResourceIdentifier](#resourceidentifier) |  | The path to the asset file or the identifier of the uploaded asset. |

### Configuration

Configuration message containing all the parameters needed to load resources in AVX.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `scene` | [SceneInfo](#sceneinfo) |  | Information on the scene in which the simulation takes place. |
| `deploy_configuration` | [DeployConfiguration](#deployconfiguration) |  | The infrastructure deploy parameters. |
| `simulation_parameters` | [SimulationParameters](#simulationparameters) |  | The simulation parameters. |
| `sensors` | [SensorConfig](#sensorconfig) |  | The sensor configuration. |
| `lighting_system_configuration` | [LightingSystemConfiguration](#lightingsystemconfiguration) |  | The Lighting System configuration of the ego vehicle. <br>Note: Multiple Lighting Systems can be associated with the ego vehicle, but only one can be set as active. When this parameter is not set, the vehicle lighting is based on the tags defined in the vehicle asset. |
| `ego_vehicle_identity` | [ansys.api.avxcelerate.sensors.v1.ObjectIdentifier](#objectidentifier) |  | The unique identifier of the ego vehicle, which is the vehicle instance to which the sensor configuration and Lighting System(s) are attached. |

### LightingSystem

Description of a Lighting System with its identifier and either a data buffer, or the identifier of an uploaded resource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | [ansys.api.avxcelerate.sensors.v1.ObjectIdentifier](#objectidentifier) |  | The unique identifier of the Lighting System. |
| <small><strong>oneof</strong> <code>system</code></small> `lighting_system_data` | bytes |  | The encapsulated byte array. |
| <small><strong>oneof</strong> <code>system</code></small> `resource` | [ansys.api.avxcelerate.sensors.v1.ResourceIdentifier](#resourceidentifier) |  | The identifier of the uploaded Lighting System. |

### LightingSystemConfiguration

List of all the Lighting Systems associated with the ego vehicle, as well as the active Lighting System.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `lighting_systems` | [LightingSystem](#lightingsystem) | repeated | The list of all Lighting Systems associated with the ego vehicle. |
| `active_lighting_system` | [ansys.api.avxcelerate.sensors.v1.ObjectIdentifier](#objectidentifier) |  | The Lighting System that is set as active.<br>Note: If this value is not set, the first Lighting System associated with the ego vehicle is set as active. |

### SceneInfo

Message containing all the components that make up a scene: the assets and the track.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `assets` | [AssetInfo](#assetinfo) | repeated | The list of all the assets included in the scene. |
| `track` | [ansys.api.avxcelerate.sensors.v1.ResourceIdentifier](#resourceidentifier) |  | The path to the track file or the identifier of the uploaded track. |

### SensorConfig

Description of the sensor configuration as binary data.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sensor_configuration` | bytes |  | The encapsulated byte array.<br>Note: We chose to have a supertype so that it may evolve in the future with lower impact. |

## ansys/api/avxcelerate/sensors/v1/simulation/deploy_parameters.proto

This file describes the messages used to distribute the simulation across several GPUs and/or workstations.

### DeployConfiguration

Configuration parameters for the AVX simulation deployment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `local_nodes` | [LocalNodes](#localnodes) |  | Parameters used to spawn the AVX local processes. |
| `deploy_hosts` | [DeployHost](#deployhost) | repeated | Parameters used to spawn the AVX remote processes. |

### DeployHost

Deploy nodes on a remote host.

A deploy host is identified by its IPv4 address.

Note: A deploy host can contain several deploy nodes.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `address` | string |  | IPv4 host address used to spawn the AVX processes. |
| `deploy_nodes` | [DeployNode](#deploynode) | repeated | List of deploy nodes on this host. |
| `resource_manager_port` | google.protobuf.Int32Value |  | The TCP port used for the resource manager process on this deploy host. |
| `gpu_identifiers` | [GpuIdentifier](#gpuidentifier) | repeated | The identifiers of the GPUs that are available on this deploy host.<br>Note: Make sure that the identifiers that you provide are valid. |
| `data_access_server_port` | google.protobuf.Int32Value |  | The TCP port used to communicate with the data access server (optional). |

### DeployNode

Parameters for a deploy node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_id` | string |  | A user-defined identifier for the node.<br>This identifier must be unique to the node.<br>Note: The identifier is case-sensitive and can be any string without length constraint. |
| `port` | google.protobuf.Int32Value |  | The TCP port used to communicate with the node. |

### GpuIdentifier

Identifier of a GPU that includes a name and the identification number of the GPU.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | string |  | A user-defined name for the GPU.<br>This identifier must be unique.<br>Note: The identifier is case-sensitive and can be any string without length constraint. |
| <small><strong>oneof</strong> <code>gpu_id</code></small> `index` | string |  | The index number of the GPU.<br>Note: The GPU index might not be consistent between PC reboots. <br>Therefore, it is recommended to use the PCI bus ID (`bus_id`) or the <br>UUID (`uuid`) instead. <br>For more details, refer to AVxcelerate Sensors Simulator User's Guide. |
| <small><strong>oneof</strong> <code>gpu_id</code></small> `bus_id` | string |  | The PCI bus identifier of the GPU.<br>Note: The PCI bus identifier must have the format a:b:c.d with a = domain ID, b = bus ID, c = device ID, d = function ID and each represented as base-16 number with 1 to 8 digits. |
| <small><strong>oneof</strong> <code>gpu_id</code></small> `uuid` | string |  | The UUID of the GPU.<br>Note: The UUID must be a string starting with an upper-case 'GPU' <br>followed by five base-16 number blocks separated with a hyphen. The blocks must have the following amount of digits: 8, 4, 4, 4 and 12. <br>Example: GPU-12345678-1234-1234-1234-123456789abc |

### LocalNodes

Deploy parameters of the local workstation.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `min_port` | google.protobuf.Int32Value |  | The first TCP port used to communicate with local nodes.<br>AVX allocates ports to communicate with different processes starting from the port defined in this field.<br>Note: The value must be greater than 1024. |
| `max_port` | google.protobuf.Int32Value |  | The last TCP port used to communicate with local nodes.<br>AVX allocates ports to communicate with different processes up to this last port.<br>Note: The value must be greater than the value defined in the `min_port` field. |
| `gpu_identifiers` | [GpuIdentifier](#gpuidentifier) | repeated | The identifiers of the GPUs that are available on the local host.<br>Note: Make sure that the identifiers that you provide are valid. |

## ansys/api/avxcelerate/sensors/v1/simulation/simulation.proto

This file describes the service used to execute the simulation.

### Simulation

Simulation Service

This service provides the simulation control procedures.

Note: When using simulation control procedures, make sure you follow a valid simulation sequence. For more details, refer to the API description section of the API documentation. Procedure calls that are not consistent with the current AVX state will end in error.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [Configuration](#configuration) | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Loads AVX with a track, a list of assets, some simulation parameters, a sensor configuration, a Lighting System (optional), some deployment parameters and the ID of the ego vehicle (the vehicle instance to which the sensor configuration will be attached). |
| Initialize | [WorldUpdate](#worldupdate) | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Sets the desired initial position, orientation and state of all the components of the world. Changes the AVX state to RUNNING.<br>Note: When called after the Stop command, the Initialize command resets the sensors and advanced lighting systems to their initial loaded states. <br>For more information on this feature, refer to the Simulation section of the API description chapter in the API documentation. |
| Update | [WorldUpdate](#worldupdate) | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Applies a world model update to AVX. |
| Stop | .google.protobuf.Empty | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Stops the simulation. Changes the AVX state from RUNNING to LOADED. |
| Unload | .google.protobuf.Empty | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Unloads the simulation. Changes the AVX state back to STARTED.<br>Note: This command allows the restart of a simulation without having to restart AVX. |
| Kill | .google.protobuf.Empty | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Sends a signal to end all the AVX processes properly. <br>Closes the gRPC server. |

## ansys/api/avxcelerate/sensors/v1/simulation/simulation_parameters.proto

This file describes the messages used to define the simulation parameters.

### AutomaticBatching

Automatic batching configuration.

Note: With the automatic batching method, the number of batches on rays and on rx channels are computed by the system taking into account the specified two constraints. There are two possibilities for the second constraint according to your needs: To use the default GPU, set the `gpu_memory_quota`. To use any other GPU or several GPUs, set the `gpu_quotas`.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `max_number_of_ray_batches` | int32 |  | First constraint: the upper bound on the automatically computed number of ray batches. |
| `gpu_memory_quota` | double |  | Second constraint, option 1: the max fraction (quota) of the total <br>GPU memory that can be used. The default GPU (whose index is 0) will be used. |
| `gpu_quotas` | [map AutomaticBatching-GpuQuotasEntry](#automaticbatching-gpuquotasentry) | repeated | Second constraint, option 2: the max fraction (quota) of the total memory of the specified GPU that can be used.<br>Key [string]: The GPU name.<br>Note: The GPU names must correspond to the `GpuIdentifier` names specified in the deploy parameters.<br>Value [double]: The max fraction of the GPU memory that can be used. |

### AutomaticBatching-GpuQuotasEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | string |  |  |
| `value` | double |  |  |

### CameraGroundTruthParameters

Types of ground truth output data generated by the physics-based camera.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `generate_depth_map` | bool |  | Activation of the depth map production.<br>A depth map indicates for each pixel the distance of the associated point relative to the camera sensor's mounting position.<br>Default value: false |
| `generate_optical_flow` | bool |  | Activation of the optical flow production.<br>The optical flow indicates for each pixel the linear speed of the associated point relative to the camera sensor's mounting position.<br>Default value: false |
| `generate_pixel_segmentation` | bool |  | Activation of the pixel segmentation production.<br>The pixel segmentation gives a color to each pixel based on the object it belongs to.<br>Default value: false |
| `generate_2d_bounding_boxes` | bool |  | Activation of the bounding boxes production.<br>This parameter activates the generation of 2D and 3D bounding boxes.<br>For more details on the bounding box data generated in shared memory, refer to the `BoundingBox2D` and `BoundingBox3D` messages.<br>For more details on the file generated on disk, refer to AVxcelerate Sensors Simulator User's Guide.<br>Default value: false |

### CartesianGrid

Cartesian grid definition.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `horizontal_grid_points` | int32 |  | The number of horizontal squares in the grid. |
| `vertical_grid_points` | int32 |  | The number of vertical squares in the grid. |

### DataAccessSettings

Configuration of the output data generation and storage methods.

Note: If no data access configuration is set, the default behavior is to activate output data production in shared memory.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
|  </small> `recording_format` | [RecordingFormat](#recordingformat) | optional | Activation of output data saving to disk, and configuration of the type of data and file format.<br>Refer to the `RecordingFormat` message for more information. |
| <small><strong>oneof</strong> <code>memory_access</code></small> `shared_memory_access` | google.protobuf.BoolValue |  | Activation of output data production in shared memory.<br>The data stored in shared memory can be accessed via a notification-based mechanism. |
| <small><strong>oneof</strong> <code>memory_access</code></small> `remote_direct_memory_access` | [RemoteDirectMemoryAccess](#remotedirectmemoryaccess) |  | Activation and configuration of output data production for <br>Remote Direct Memory Access using the pre-build RDMA sender.<br>Note: This parameter only applies to camera output data.<br>Note: Data access using Remote Direct Memory Access (RDMA) technology is delivered as a beta feature in the current release.<br>Note: This option is deprecated and will be removed in future releases. <br>It is recommended to use the `DataDirectMemoryAccess` option instead for improved functionality and support. |
| <small><strong>oneof</strong> <code>memory_access</code></small> `data_direct_memory_access` | [DataDirectMemoryAccess](#datadirectmemoryaccess) |  | Activation and configuration of output data production using <br>Data Direct Memory Access (DDMA).<br>Data can be streamed directly from GPU or CPU memory using the<br>DDMA extension.<br>Note: Data access using Direct Memory Access (DDMA) is delivered as a beta feature in the current release.<br>Note: DDMA is available for camera and radar sensors only. <br>For radar output data, GPU or CPU pointers can be used to stream range doppler maps and raw responses. Only GPU pointers can be used to stream propagation output data. <br>For camera output data, GPU or CPU pointers can be used to stream <br>RGBA32 raw image data and Float128 raw spectral irradiance data. <br>However, GPU RDMA supports only output data produced by camera sensors configured to use the Light Propagation Engine (LPE) rendering engine.<br>Note: The DDMA extension must be properly configured. <br>For more information, refer to the DDMA samples. |

### DataDirectMemoryAccess

Configuration of Data Direct Memory Access (DDMA).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `target` | [DataDirectMemoryAccessTarget](#datadirectmemoryaccesstarget) |  | Target memory domain for DDMA.<br>Default value: GPU. |

### DisplayInformation

Settings for the Display of a camera sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `top_left_corner_position` | [TopLeftCornerPosition](#topleftcornerposition) |  | Position of the top left corner of the rendering window. |
| `display_only` | bool |  | Activation of the Display Only mode.<br>When the Display Only mode is activated (value set to `true`), the camera output is only displayed in the rendering window. No data is recorded (neither in the shared memory nor dumped on disk) and the `recording_format` parameter is ignored.<br>When the Display Only mode is deactivated (value set to `false`, which is the default value), the camera output data are both generated in shared memory and displayed in the rendering window.<br>Default value: false |

### Grid

Type of grid for the lidar sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>grid</code></small> `cartesian_grid` | [CartesianGrid](#cartesiangrid) |  | The Cartesian grid.<br>Note: Cartesian grid applies to flashing lidar only. |
| <small><strong>oneof</strong> <code>grid</code></small> `polar_grid` | [PolarGrid](#polargrid) |  | The polar grid.<br>Note: Polar grid applies to rotating lidar only. |

### LidarSimulation

Simulation parameters for a Lidar.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `waveform` | bool |  | Activation of the waveform output production by the lidar.<br>Default value: false |
| `contribution` | bool |  | Activation of the contribution output production by the lidar.<br>Default value: false |
| `grid` | [Grid](#grid) |  | The lidar ray-tracing grid. |
| `number_of_batches` | google.protobuf.Int32Value |  | The number of batches.<br>Default value: 1<br>Note: The number of batches must be less than or equal to the lidar resolution. |
| `gpu_name` | string |  | The GPU name that must be used for the simulation of this lidar sensor.<br>Note: The GPU name must correspond to a `GpuIdentifier` name specified in the deploy parameters.<br>Note: Optional field. If not set, the default GPU (whose index is 0) will be used. |
| `use_rgb_diffuse` | bool |  | Use RGB diffuse parameters in the simulation of this lidar sensor. <br>Default value: false |
| `enable_surface_smoothing` | bool |  | Enable surface smoothing for time of flight calculation according to the surface curvature.<br>Default value: false |

### LightPropagationEngineSimulationParameters

Simulation parameters for the Light Propagation Engine.

Note: The Light Propagation Engine is delivered as a beta feature in the current release.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
|  </small> `camera_near_distance` | double | optional | Distance at which the camera starts seeing objects.<br>Unit: meters (m) <br>Range: ]0.0, `camera_culling_distance`] or ]0.0, inf[ if `camera_culling_distance` == 0<br>Default value: 0.3 |
|  </small> `camera_culling_distance` | double | optional | Distance at which the camera stops seeing objects.<br>Unit : meters (m)<br>Range: [`camera_near_distance`, inf[ or 0<br>Note: Setting the value to 0 means infinite.<br>Default value: 1000 |
| <small><strong>oneof</strong> <code>ambient_occlusion</code></small> `screen_space_ambient_occlusion` | [ScreenSpaceAmbientOcclusion](#screenspaceambientocclusion) |  | Screen-Space Ambient Occlusion. |
| <small><strong>oneof</strong> <code>ambient_occlusion</code></small> `raytraced_ambient_occlusion` | [RaytracedAmbientOcclusion](#raytracedambientocclusion) |  | Raytraced Ambient Occlusion. |
|  </small> `occlusion_culling` | bool | optional | Activation of the Occlusion Culling.<br>Default value: true |
|  </small> `raytraced_shadows` | bool | optional | Activation of the Raytraced Shadows.<br>Default value: true |
| `shadow_quality` | [Qualities](#qualities) |  | The camera shadow quality.<br>Default value: MEDIUM |
|  </small> `antialiasing_factor` | double | optional | The camera antialiasing factor.<br>Range: [1.0, 4.0]<br>Default value: 1.0 |
| `camera_ground_truth_parameters` | [CameraGroundTruthParameters](#cameragroundtruthparameters) |  | Activation of ground truth output production.<br>Ground truth output data can be used to test or train a perception algorithms.<br>Note: Optional field. If not set, no ground truth output is generated. |
|  </small> `raytraced_scene_renderer` | bool | optional | Activation of raytraced scene renderer.<br>Note: Raytraced scene renderer is delivered as an experimental feature in the current release. |
|  </small> `raytraced_reflections` | bool | optional | Activation of the Raytraced Reflections.<br>Default value: false |

### LightingSystemParameters

Lighting system simulation parameters.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
|  </small> `sampling_rate` | double | optional | Angular sampling used when computing the rendering of the light sources in the Lighting System.<br>Unit: degrees<br>Range: [0.05, 57]<br>Default value: 0.05 |

### ManualBatching

Manual batching configuration.

Note: With the manual batching method, the number of batches for rx channels must be specified.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `rx_batching` | [RxBatching](#rxbatching) | repeated | The batching on rx channels. |
| `gpu_by_modes` | [map ManualBatching-GpuByModesEntry](#manualbatching-gpubymodesentry) | repeated | Definition of the GPU to use for the simulation of each mode of this radar sensor.<br>Key [int32]: The mode id.<br>Value [string]: The GPU name.<br>Note: The GPU names must correspond to the GpuIdentifier names specified in the deploy parameters. |

### ManualBatching-GpuByModesEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | int32 |  |  |
| `value` | string |  |  |

### OutputSplitting

Output data splitting configuration.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `radar_output_splitting` | [RadarOutputSplitting](#radaroutputsplitting) |  | The radar output splitting configuration. |

### PbCameraSimulation

Simulation parameters for a physics-based camera.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `rendering_parameters` | [RenderingParameters](#renderingparameters) |  | The rendering engine parameters. |
| `gpu_name` | string |  | The GPU name that must be used for the simulation of this camera sensor.<br>Note: The GPU name must correspond to an existing name set in the GpuIdentifier in a deploy or local host in the deploy configuration.<br>Note: Optional field. If not set, the default GPU (whose index is 0) will be used. |

### PolarGrid

Polar grid definition.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `radial_grid_points` | int32 |  | The number of radial segments. |
| `angular_grid_points` | int32 |  | The number of angular segments. |
| `has_central_point` | bool |  | Field indicating whether or not an on-axis ray (point of emission) must be added to the center of the grid.<br>Default value: false |

### RadarDebugViewParameters

Parameters for the radar's debug view images.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `color_mode` | [ColorMode](#colormode) |  | The color mode of the debug view images. |
| `image_width` | google.protobuf.Int32Value |  | The width of the debug view images.<br>Range: ]0, int32 max]<br>Default value: 1024<br>Note: The debug view image is square (width = height). |
| `background_gray_level` | google.protobuf.Int32Value |  | The gray level of the debug view image's background.<br>Range: [0, 255]<br>Default value: 128 |
| `enable_material_shading` | google.protobuf.BoolValue |  | Activation of the shading on materials in the output images of the debug view with the `COATING` color mode. <br>Shading materials eases image interpretation by humans.<br>Note: This parameter only applies to debug view images with the `COATING` color mode. Its value will not be considered if any other color mode is used.<br>Default value: false |
| `oversample` | google.protobuf.DoubleValue |  | The rasterization density when rasterizing the triangles to fill image pixels.<br>Range: ]0, double max]<br>Default value: 1.0<br>Note: It is recommended to start with 1.0 and increase as needed to achieve the desired image quality. |

### RadarGridSampling

Radar grid sampling specifies the global sampling and the adaptive sampling to be applied to the scene.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `global_sampling` | [RadarGridSamplingParameters](#radargridsamplingparameters) |  | Global sampling defining the default sampling to be applied to the scene. |
| `adaptive_sampling` | [map RadarGridSampling-AdaptiveSamplingEntry](#radargridsampling-adaptivesamplingentry) | repeated | The tag-sampling mapping table for adaptive sampling which assigns ray spacing values to tagged objects.<br>Note: If a tag is not associated with any object in the scene, the simulation will stop with an error.<br>Key [string]: The name of the tag.<br>Note: For pre-defined tags, use the CamelCase form of the tag name in <br>AVxcelerate Asset Preparation Editor. For example, "RoadSign" for Road Sign, "StreetLight" for Street Light, "SteeringWheel" for Steering Wheel. <br>Be aware of the following two exceptions: "SimulationObject" should be used instead of Object, "Indicator" should be used instead of Turn Indicator. <br>For custom tags, the expected text string is the name of the tag as it is written in AVxcelerate Asset Preparation Editor.<br>Value [`RadarGridSamplingParameters`]: Refer to this message for details.<br>Note: For tags belonging to the same hierarchy of objects, the ray spacing value assigned to a child-node tag must be less than or equal to that of the parent-node tag. If the ray spacing value of the child-node tag is greater than that of the parent-node tag, it will be be lowered to match the ray spacing value of the parent-node tag. |

### RadarGridSampling-AdaptiveSamplingEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | string |  |  |
| `value` | [RadarGridSamplingParameters](#radargridsamplingparameters) |  |  |

### RadarGridSamplingParameters

Radar grid sampling parameters, which consist of the ray spacing parameter.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `ray_spacing` | double |  | For global sampling, the ray spacing is expressed as the distance between adjacent rays measured at 100m from the source.<br>For adaptive sampling, the ray spacing is expressed as the distance between adjacent rays regardless of the distance of the object from the source (the number of rays hitting the object will be kept constant all across the simulation).<br>Unit: meter (m)<br>Range: ]0, double max] |

### RadarOutputSplitting

Radar output data splitting configuration.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `radar_output_splitting_level` | [RadarOutputSplittingLevel](#radaroutputsplittinglevel) |  | The radar output splitting level. |

### RadarSimulation

Simulation parameters for a radar and, optionally, the type of execution batching method.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `number_of_ray_reflections` | int32 |  | The maximum number of ray bounces (reflections) on the scene's objects before the ray is forced to return to the sensor.<br>Note: The limit applies to each individual ray. |
| `number_of_ray_transmissions` | int32 |  | The maximum number of transmissions on the scene's objects before the ray is forced to return to the sensor.<br>Note: The limit applies to each individual ray. |
| `grid_sampling` | [RadarGridSampling](#radargridsampling) |  | The sampling of the grid. |
| <small><strong>oneof</strong> <code>batching</code></small> `manual_batching` | [ManualBatching](#manualbatching) |  | Configuration of the manual batching.<br>Note: Optional field. By default, the sensor execution is not batched. |
| <small><strong>oneof</strong> <code>batching</code></small> `automatic_batching` | [AutomaticBatching](#automaticbatching) |  | Configuration of the automatic batching.<br>Note: Optional field. By default, the sensor execution is not batched. |
| `tx_waveform_report` | bool |  | Activation of the tx waveform output generation by the radar.<br>Default value: false |
| `ego_vehicle_emission_blockage` | bool |  | Field indicating whether or not the Ego vehicle geometry will be considered in calculations upon the emission of the ray's first bounce.<br>When this parameter is set to `true`, the ego vehicle geometry is considered in calculations upon the emission of the ray's first bounce.<br>When this parameter is set to `false` (which is the default value), the ego vehicle geometry is not considered in calculations upon the emission of the ray's first bounce.<br>Default value: false |
| `debug_view_parameters` | [RadarDebugViewParameters](#radardebugviewparameters) |  | Parameters for the generation of debug view images. <br>Optional field. If not set, the debug view images are not generated. |
| `max_ray_path_length_by_mode` | [map RadarSimulation-MaxRayPathLengthByModeEntry](#radarsimulation-maxraypathlengthbymodeentry) | repeated | The maximal length for the ray path per radar mode.<br>Key [int32]: The mode id.<br>Value [double]: The maximal length for the ray path.<br>Unit: meters (m)<br>Range: ]0, 2 * `max_path_length`[<br>Default value: 200<br>Note: Features with total path length greater than twice the max ray path length, including the path back to the radar, will be excluded.<br>Note: This parameter only applies to radars with arbitrary waveform. |
| `max_velocity_by_mode` | [map RadarSimulation-MaxVelocityByModeEntry](#radarsimulation-maxvelocitybymodeentry) | repeated | The maximal velocity for each radar mode. <br>Key [int32]: The mode id.<br>Value [double]: The maximal velocity.<br>Unit: meters per second (m/s)<br>Range: ]0, double max[<br>Default value: 75<br>Note: Features with (absolute value of) relative velocity greater than the maximal velocity will be excluded.<br>Note: This parameter only applies to radars with arbitrary waveform. |
| `use_curvature` | bool |  | Field indicating whether or not to consider the curvature of a surface for bouncing rays.<br>Default value: false<br>Note: Curvatures are always considered for the signal construction.<br>Note: Curvature consideration is delivered as a beta feature in the current release. |

### RadarSimulation-MaxRayPathLengthByModeEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | int32 |  |  |
| `value` | double |  |  |

### RadarSimulation-MaxVelocityByModeEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | int32 |  |  |
| `value` | double |  |  |

### RaytracedAmbientOcclusion

Parameters for raytraced ambient occlusion.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `activation` | bool |  | Activation of the raytraced ambient occlusion feature.<br>Default value: false |
|  </small> `sampling_angle` | float | optional | The angle of the cone sampling distribution:<br> - 0 for sampling along the normal only.<br> - Pi/2 to sample the whole hemisphere.<br>Unit: radian<br>Range: [0, Pi/2]<br>Default: 1.0 |
|  </small> `occlusion_detection_radius` | float | optional | The maximum distance up to which ray-intersections are computed. All occlusion events beyond this distance are ignored.<br>Unit: meter (m)<br>Range: ]0.01, 1000]<br>Default: 5 |
|  </small> `sample_number` | int32 | optional | The number of samples used to compute the occlusion map.<br>Note: Setting the `Sample_Number` greater than 128 and the `Downscale Factor` to `FULL` has a huge impact on performances.<br>Range: [1, 512]<br>Default: 8 |
|  </small> `power_factor` | float | optional | Exponent applied to the ambient occlusion map.<br>Note: The raytraced ambient occlusion feature is no more physically correct when the `Power Factor` value is set to anything but 1.<br>Range: Strictly positive<br>Default: 1 |
|  </small> `use_denoiser` | bool | optional | Activation of denoising on the raytraced ambient occlusion output.<br>Default: true |
|  </small> `resolution_scale` | [RtaoDownscaleFactor](#rtaodownscalefactor) | optional | Scale for the resolution at which the ambient occlusion is computed. |

### RecordingFormat

Format for recording the sensor's outputs.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>sensor_data_format</code></small> `camera_recording_format` | [ansys.api.avxcelerate.sensors.v1.CameraDataFormat](#cameradataformat) |  | Format for saving camera output on disk.<br>Possible value for physics-based camera: RAW, BMP, GIF, JPEG, PNG or SPECTRAL_IRRADIANCE_MAP. <br>Possible value for thermal camera: TEMPERATURE_MAP. |
| <small><strong>oneof</strong> <code>sensor_data_format</code></small> `radar_recording_format` | [ansys.api.avxcelerate.sensors.v1.OutputFormat](#outputformat) |  | Format for recording radar output. |
| <small><strong>oneof</strong> <code>sensor_data_format</code></small> `lidar_recording_format` | [ansys.api.avxcelerate.sensors.v1.OutputFormat](#outputformat) |  | Format for recording lidar output. |

### RemoteDirectMemoryAccess

Configuration of Remote Direct Memory Access using the pre-built RDMA sender.

Note: Data access using Remote Direct Memory Access (RDMA) technology is delivered as a beta feature in the current release.

Note: If your RDMA sender uses the DDMA extension, you must use the `DataDirectMemoryAccess` parameter, not `RemoteDirectMemoryAccess`.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `transfer_chunk_size` | int32 |  | Size of the RDMA data chunk in bytes. |
| `sender_address` | string |  | Sender's IPv4 address. |
| `sender_port` | google.protobuf.Int32Value |  | Sender's TCP port. |
| `sender_backchannel_port` | google.protobuf.Int32Value |  | Sender's back-channel port. |
| `post_embedded_data_line_count` | google.protobuf.Int32Value |  | Number of expected post-embedded data lines. |
| `post_embedded_data_line_payload_size` | google.protobuf.Int32Value |  | Total size in bytes of the post-embedded data lines. |
| `pre_embedded_data_line_count` | google.protobuf.Int32Value |  | Number of expected pre-embedded data lines. |
| `pre_embedded_data_line_payload_size` | google.protobuf.Int32Value |  | Total size in bytes of the pre-embedded data lines. |

### RenderingParameters

Rendering engine parameters for the camera sensor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `borderless` | google.protobuf.BoolValue |  | Field indicating whether or not the rendering window is borderless.<br>Default value: false |
| `vertical_sync` | google.protobuf.BoolValue |  | Activation of the vertical synchronization between the rendering frequency of the Display and the frame rate of the screen where the rendering window is located.<br>Default value: false |
| `enable_alpha_channel` | google.protobuf.BoolValue |  | Activation of the alpha channel in the camera output.<br>Default value: true<br>Note: The values for the alpha channel are not used and are filled with default values. |
| `enable_asynchronous_readback` | bool |  | Activation of the asynchronous GPU readback.<br>Default value: false<br>Note: Asynchronous GPU readback is delivered as a beta feature in the current release. |
| <small><strong>oneof</strong> <code>specific_parameters</code></small> `real_time_parameters` | [RenderingParameters.RealTimeParameters](#realtimeparameters) |  | Camera simulation parameters for real time rendering. |
| <small><strong>oneof</strong> <code>specific_parameters</code></small> `lpe_parameters` | [LightPropagationEngineSimulationParameters](#lightpropagationenginesimulationparameters) |  | Camera simulation parameters for the Light Propagation Engine.<br>Note: The Light Propagation Engine is delivered as a beta feature in the current release. |

### RenderingParameters-RealTimeParameters

Camera simulation parameters for real time rendering.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `camera_near_plane` | google.protobuf.FloatValue |  | The camera near plane value.<br>Unit: meters (m)<br>Range: ]0, `camera_far_plane`[<br>Default value: 0.1 |
| `camera_far_plane` | google.protobuf.FloatValue |  | The camera far plane.<br>Unit: meters (m)<br>Range: ]`CameraNearPlane`, float max]<br>Default value: 10000.0 |
| `shadow_quality` | [Qualities](#qualities) |  | The camera shadow quality.<br>Default value: EXTREME |
| `texture_quality` | [Qualities](#qualities) |  | The camera texture quality.<br>Default value: EXTREME |
| `antialiasing_factor` | google.protobuf.FloatValue |  | The camera antialiasing factor.<br>Range: [1.0, 4.0]<br>Default value: 1.0 |
| `camera_ground_truth_parameters` | [CameraGroundTruthParameters](#cameragroundtruthparameters) |  | Activation of ground truth output production.<br>Ground truth output data can be used to test or train a perception algorithms.<br>Note: Optional field. If not set, no ground truth output is generated. |

### RxBatching

Settings for the batching on rx channels.

Note: The number of batches is set, and therefore applies, independently for each radar mode.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `mode_id` | int32 |  | The id of the mode to which rx batching is applied. |
| `number_of_rx_batches` | int32 |  | The number of batches on rx channels. |

### ScreenSpaceAmbientOcclusion

Parameters for Screen-Space Ambient Occlusion.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `activation` | bool |  | Activation of the screen space ambient occlusion feature.<br>Default value: false |
|  </small> `amount` | double | optional | Linear gain factor of neighbouring occluders.<br>Range: [ 1.0, 8.0 ]<br>Default value: 1.0 |
|  </small> `radius` | double | optional | Maximal radius to detect occluders.<br>Unit: meters (m)<br>Range: [0.01, 2.0]<br>Default: 0.8 |
|  </small> `power_exponent` | double | optional | Amplification factor of the occlusion ambient lighting.<br>Range: [0.0, 8.0]<br>Default: 2 |
|  </small> `surface_bias` | double | optional | Distance bias to avoid self shadowing.<br>Unit: meters (m)<br>Range: [0.0, 1.0]<br>Default value: 0.01 |

### SensorParameters

Contains the simulation parameters for a given sensor defined by its identifier.

Note: If the type of sensor is not consistent with the sensor configuration, it will cause an error.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | string |  | The unique identifier of the sensor as defined in the sensor configuration. |
| `display` | [DisplayInformation](#displayinformation) |  | Field indicating whether or not the camera sensor's outputs are displayed on screen in a dedicated rendering window.<br>The resolution of the rendering window is the Native Resolution defined in the Imager parameters of the camera sensor model.<br>Note: Optional field. If not set, the camera outputs are not displayed on the screen.<br>Note: This parameter applies to physics-based camera sensors only.<br>If it is set for any other type of sensors, it is ignored.<br>Note: Lens output without custom post-processing, as well as any output with custom post-processing whose encoding format is different than <br>Gray8 or RGB24 are not supported for display. For those unsupported formats, a black image is displayed in the rendering window and a warning is raised in the logs.<br>Note: If the fragment shared used for custom post-processing is configured to produce multiple outputs, the Display takes into account only the first output defined in the fragment shader. |
| <small><strong>oneof</strong> <code>sensor_parameter</code></small> `radar_simulation` | [RadarSimulation](#radarsimulation) |  | Specific parameters for a radar sensor. |
| <small><strong>oneof</strong> <code>sensor_parameter</code></small> `lidar_simulation` | [LidarSimulation](#lidarsimulation) |  | Specific parameters for a lidar sensor. |
| <small><strong>oneof</strong> <code>sensor_parameter</code></small> `pb_cam_simulation` | [PbCameraSimulation](#pbcamerasimulation) |  | Specific parameters for a physics-based camera sensor. |
| <small><strong>oneof</strong> <code>sensor_parameter</code></small> `thermal_cam_simulation` | [ThermalCameraSimulation](#thermalcamerasimulation) |  | Specific parameters for a thermal camera sensor. |
| `output_splitting` | [OutputSplitting](#outputsplitting) |  | Sensor's output data splitting configuration.<br>Note: This parameter only applies to radar sensor data. <br>Note: Optional field. If not set, the output data is not split. |
| `serialize_data` | google.protobuf.BoolValue |  | Activation of serialization of the output data in shared memory.<br>When this parameter is set to `true`, the data is serialized. <br>When this parameter is set to `false`, the data is unserialized.<br>Note: Only Camera Output (Image) and Imager Output (Injection) data of physics-based camera sensors can be unserialized. <br>Camera Lens Output (Light), thermal camera, lidar and radar output data are always serialized.<br>Default value: true |
| `deploy_node_id` | string |  | The identifier of the deploy node on which the sensor is spawned, as defined in the deploy configuration.<br>Note: Optional field. If not set, the sensor process is executed on the local host. |
| `data_access_settings` | [DataAccessSettings](#dataaccesssettings) |  | Configuration of the output data generation and storage methods. |
| `start_offset` | double |  | Delay between the start of the simulation and the sensor's frame cycle.<br>Unit: millisecond (ms)<br>Range: Positive |

### SimulationParameters

Contains the general simulation parameters and simulation parameters per sensor.

These parameters define the accuracy of the simulation, the types of output each sensor generates, as well as the output data generation and storage methods.

Note: Simulation parameters may have an impact on the performance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `sensor_simulation_parameters` | [SensorParameters](#sensorparameters) | repeated | List of simulation parameters per sensor. |
| `lighting_system_parameters` | [LightingSystemParameters](#lightingsystemparameters) |  | Lighting system parameters.<br>Note: The Lighting System parameters apply to all the Lighting Systems associated to the the ego vehicle. |
| `pixel_segmentation_mapping` | [ansys.api.avxcelerate.sensors.v1.PixelSegmentationMapping](#pixelsegmentationmapping) |  | Configuration of the tag-color mapping used for the pixel segmentation camera ground truth data. |

### ThermalCameraSimulation

Simulation parameters for a thermal camera.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `rendering_parameters` | [RenderingParameters](#renderingparameters) |  | The rendering engine parameters. |
| `gpu_name` | string |  | The GPU name that must be used for the simulation of this thermal camera sensor.<br>Note: The GPU name must correspond to a GpuIdentifier name specified in the deploy parameters.<br>Note: Optional field. If not set, the default GPU (whose index is 0) will be used. |

### TopLeftCornerPosition

Position of the top left corner of the rendering window relative to the top left corner of the monitor.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | int32 |  | The horizontal offset (in pixels) of the rendering window from the top left corner of the monitor.<br>Default value: 1 |
| `y` | int32 |  | The vertical offset (in pixels) of the rendering window from the top left corner of the monitor.<br>Default value: 1 |

### ColorMode

The available color modes for the radar's debug view output.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BLACKWHITE | 0 | Color in shades of gray by the angle of incidence between the surface and viewing direction. (Default value.) |
| COATING | 1 | Color by the dielectric properties of the materials.<br>Note: Color assignment is determined by the material indices of each radar simulation instance and is not deterministic.<br>Optionally shaded (when `enable_material_shading` is set to `true` in `RadarDebugViewParameters`). |
| VELOCITY | 2 | Color by the relative velocities. <br>The R, G and B values correspond respectively to the velocities in the <br>X, Y and Z direction. |
| NORMAL | 3 | Color by the normal of the surfaces converted to RGB. |

### DataDirectMemoryAccessTarget

Target memory domain for Data Direct Memory Access.

Default value: GPU.

| Name | Number | Description |
| ---- | ------ | ----------- |
| GPU | 0 | Stream data from GPU accessible memory (default). |
| CPU | 1 | Stream data from CPU addressable memory. |

### Qualities

The possible values for quality factors.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNDEFINED | 0 | Undefined value. (The default value will apply.) |
| LOW | 1 | Low quality. |
| MEDIUM | 2 | Medium quality. (Default value for fields in the `LightPropagationEngineSimulationParameters` message.) |
| HIGH | 3 | High quality. |
| EXTREME | 4 | Extreme quality. (Default value for fields in the `RealTimeParameters` message.) |

### RadarOutputSplittingLevel

The available radar output splitting levels.

| Name | Number | Description |
| ---- | ------ | ----------- |
| DEFAULT | 0 | Default value. Output data is not split. |
| MODE | 1 | Split by radar mode. |
| TRANSMITTER | 2 | Split by transmitter. |

### RtaoDownscaleFactor

Scale values for the resolution at which the raytraced ambient occlusion is computed.

| Name | Number | Description |
| ---- | ------ | ----------- |
| FULL | 0 | Default value. No downscale.<br>The LPE rendering resolution is used. |
| HALF | 1 | Downscale the resolution by a factor of 2. |
| QUARTER | 2 | Downscale the resolution by a factor of 4. |

## ansys/api/avxcelerate/sensors/v1/simulation/upload.proto

This file describes the service used to upload resources to the AVX server by leveraging gRPC streaming capabilities.

### ResourceUploader

Resource Uploader Service

This service provides the procedure to upload resources as byte stream using gRPC streaming capabilities.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UploadResource | [UploadRequest](#uploadrequest) stream | [.ansys.api.avxcelerate.sensors.v1.Status](#status) | Requests resource uploading. |

## ansys/api/avxcelerate/sensors/v1/simulation/upload_data.proto

This file describes the messages used by the Resource Uploader service.

### UploadMetaData

Provides information on the resource to upload.

Note: Metadata must be sent in the first `UploadRequest`. Metadata sent later are ignored.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `values` | [map UploadMetaData-ValuesEntry](#uploadmetadata-valuesentry) | repeated | Map containing metadata values.<br>Key [string]: Type of the metadata.<br>Must be "ResourceIdentifier" for Tracks, Assets, and Lighting Systems or "ResourceType" for sensor configuration.<br>Value [string]: Value associated with the metadata type. <br>Note: This field must contain at least one "ResourceIdentifier" key (without associated value), or one "ResourceType" key with the associated value "SensorConfiguration". |

### UploadMetaData-ValuesEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | string |  |  |
| `value` | string |  |  |

### UploadRequest

Upload request message.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `upload_metadata` | [UploadMetaData](#uploadmetadata) |  | The metadata used to identify the resource to upload. |
| `data` | bytes |  | The data to upload. |

## ansys/api/avxcelerate/sensors/v1/simulation/world_update.proto

This file describes the message used to send a world update to be applied at a given simulation step.

### EnvironmentUpdate

Update to apply to the environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>value</code></small> `date_time` | google.protobuf.Timestamp |  | Time of day (as sent by the simulation framework) to apply to the AVX sky model. |
| <small><strong>oneof</strong> <code>value</code></small> `street_lights_state` | [State](#state) |  | State to apply to all the nodes of the track that hold the "StreetLight" tag.<br>Note: "ON" and "OFF" are the only accepted values. |
| <small><strong>oneof</strong> <code>value</code></small> `weather` | [Weather](#weather) |  | Weather conditions. |

### Fog

Parameters defining the fog.

Note: Fog is correct in daytime simulations only.

Note: In co-simulations with CarMaker, only the maximum visibility distance parameter can be updated during the simulation.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
|  </small> `fog_activation` | bool | optional | Activation of the fog in the simulation.<br>Default value: false |
|  </small> `maximum_visibility_distance` | double | optional | The maximum visibility is defined with respect to the Annex 3 to the <br>Convention on International Civil Aviation, i.e. a residual 5% of contrast will be obtained at the given maximum visibility distance.<br>Unit: meters (m)<br>Range: Strictly positive<br>Default value: 100 |
| <small><strong>oneof</strong> <code>fog_color</code></small> `color` | [ansys.api.avxcelerate.sensors.v1.Color](#color) |  | Color of the fog, defined in the RGB format.<br>Default value: [255, 255, 255] |
| <small><strong>oneof</strong> <code>fog_color</code></small> `spectrum` | [ansys.api.avxcelerate.sensors.v1.Spectrum](#spectrum) |  | Spectrum of the fog.<br>Note: The fog spectrum should be limited to the camera spectral bandwidth<br>[390,652 nm], otherwise the irradiance value from the camera may have a small bias. |

### KinematicProperties

Properties that define the motion of a solid.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `position` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Position of the object in the world reference frame.<br>Unit: meters (m) |
| `velocity` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | Velocity of the object relative to the world reference frame.<br>Unit: meters per second (m/s) |
| `orientation` | [ansys.api.avxcelerate.sensors.v1.EulerAngles](#eulerangles) |  | Orientation of the object relative to the world reference frame.<br>Note: When applying the Euler angles update, it is done in the standard order yaw, pitch, roll.<br>Unit: radians (rad) |
| `angular_velocity` | [ansys.api.avxcelerate.sensors.v1.Vector3D](#vector3d) |  | The new angular velocity vector of the object expressed in the world reference frame. <br>Note: The value on the Y axis corresponds to the yaw rotation. The value on the X axis corresponds to the pitch rotation. The value on the Z axis corresponds to the roll rotation.<br>Unit: radians per second (rad/s) |

### ObjectKey

Key to identify the object, or some of its nodes, to which the update applies.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `vss_identity` | [ansys.api.avxcelerate.sensors.v1.ObjectIdentifier](#objectidentifier) |  | The unique identifier of an object in the simulation.<br>Note: The identifier is case-sensitive and must correspond to one defined in the loaded configuration. Each object has a unique `vss_identity`. |
| `tag` | [Tag](#tag) |  | Tag attached to the object, or to some of its nodes, during the asset preparation with AVxcelerate Asset Preparation. |

### ObjectUpdate

Update to apply to an object.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | [ObjectKey](#objectkey) |  | Key defining the object to which the update applies. |
| `kinematic_properties` | [KinematicProperties](#kinematicproperties) |  | Kinematic properties update to apply to the object.<br>Note: All the properties are absolute (i.e.the updates are applied with respect to the root node of the track). |
| `state` | [State](#state) |  | State to apply to the object. <br>The available states are defined and attached to the object during the data preparation of the asset with <br>AVxcelerate Data Preparation. |

### Rain

Parameters defining the rain.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
|  </small> `rain_rate` | float | optional | Amount of rain pouring onto the ground.<br>Unit: millimeters per hour (mm/h)<br>Range: [0;75]<br>Default value: 0<br>Note: The range has been limited to [0;75] mm/h for memory and performance reasons. |

### State

State defined on an object node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | string |  | Unique identifier of the state defined during the asset preparation with AVxcelerate Asset Preparation. |

### Tag

Definition of the tag, including its name and, in some cases, an index.

To update the whole object, set the name of the asset tag (for example "Animal", "Pedestrian", "Vehicle", "RoadSign", "StreetLight", or "SimulationObject") and no index.

To update the node(s) of a object that have a specific tag, set the name of the node tag (for example "Wheel" or "HighBeam"). Set no index to update all the nodes holding the tag, set an index to update one specific node.

Note: For a complete description of the naming conventions and standards that you should follow when tagging assets in AVxcelerate, refer to the Data Preparation section of the AVxcelerate Sensors Simulator User's Guide.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | string |  | The name of the tag. |
| `index` | google.protobuf.Int32Value |  | The index.<br>Note: The `index` field is required with the "Wheel" and "TurnIndicator" tag when you need to identify one specific node of the object among several nodes holding the same tag.<br>The index for each wheel, when the vehicle has been prepared as stated in the user documentation, is 0 for the front left wheel, 1 for the front right wheel, 2 for the rear left wheel and 3 for the rear right wheel.<br>The index is 0 for the left turn indicator and 1 for the right turn indicator. |

### Weather

Definition of the weather conditions.

Note: The weather conditions impact only camera sensors with the LPE rendering engine.

Note: Defining weather conditions delivered as a beta feature in the current release.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `fog` | [Fog](#fog) |  | State of the fog to apply to the simulation |
| `rain` | [Rain](#rain) |  | State of the rain to apply to the simulation. |
| `wind` | [Wind](#wind) |  | State of the wind to apply to the simulation. |

### Wind

Parameters defining the wind.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
|  </small> `speed` | float | optional | The wind speed.<br>Unit: meters per second (m/s)<br>Range: Positive or null |
|  </small> `direction` | float | optional | The wind direction, defined as the angle measured clockwise from true North to the direction the wind is coming from.<br>Unit: degrees |

### WorldUpdate

Contains a world update to apply to AVX at a given simulation time.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `simulation_time` | google.protobuf.Duration |  | Simulation time corresponding to this world update. The value is represented as a count of seconds and fractions of seconds at nanosecond resolution. |
| `environment_updates` | [EnvironmentUpdate](#environmentupdate) | repeated | List of changes to the environment. |
| `object_updates` | [ObjectUpdate](#objectupdate) | repeated | List of changes to simulation objects. |

## ansys/api/avxcelerate/sensors/v1/status.proto

This file describes the AVX status and status code messages.

### Status

The status message returned by AVX for any procedure call.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `code` | [StatusCode](#statuscode) |  | The status of the procedure call. |
| `message` | string |  | A status message as a text string. |

### StatusCode

The possible status code values.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUCCESS | 0 | The code returned when successful. |
| UNKNOWN_FAILURE | 1 | The code returned when there is an error on AVX side. |

## ansys/api/avxcelerate/sensors/v1/tag_colors.proto

This file describes the `PixelSegmentationMapping` message.

### PixelSegmentationMapping

Defines the mapping table of tags and colors.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `tag_color_map` | [map PixelSegmentationMapping-TagColorMapEntry](#pixelsegmentationmapping-tagcolormapentry) | repeated | The tag-color mapping table.<br>Key [string]: The name of the tag.<br>Note: For pre-defined tags, use the CamelCase form of the tag name in <br>AVxcelerate Asset Preparation Editor. For example, "RoadSign" for Road Sign, "StreetLight" for Street Light, "SteeringWheel" for Steering Wheel. <br>Be aware of the following two exceptions: "SimulationObject" should be used instead of Object, "Indicator" should be used instead of <br>Turn Indicator. <br>For custom tags, the expected text string is the name of the tag as it is written in AVxcelerate Asset Preparation Editor.<br>Value [Color]: The RGB color. |

### PixelSegmentationMapping-TagColorMapEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | string |  |  |
| `value` | [Color](#color) |  |  |

