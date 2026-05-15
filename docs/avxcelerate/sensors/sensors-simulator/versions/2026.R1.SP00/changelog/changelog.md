# Changelog

This document lists the changes introduced in AVxcelerate Sensors Simulator API v1 delivered in 2026 R1 compared to the AVxcelerate Sensors Simulator API delivered in 2025 R2.

## Change to the AVxcelerate Sensors Simulator internal gRPC server

The AVxcelerate Sensors Simulator internal gRPC server now offers the following communication configuration options:

- Unix Domain Socket (UDS), which is the default transport mode,
- Mutual Transport Layer Security (mutual TLS)

Alternatively, you may use the insecure transport mode.

For more details, refer to [**Transport modes** in the API description section](../desc/api-description.md#transport-modes) of the documentation.

Any client application that will communicate with the AVxcelerate Sensor Simulator internal gRPC server over a gRPC channel must be configured with the same transport mode that the one set when launching AVxcelerate Sensors Simulator.

## Changes to the Simulation service

### simulation_parameters.proto

#### Changes for the CPU DDMA new feature

- The **DataAccessSettings** message has been updated with the following changes and additions:

  - [Breaking change] The **DataAccessSettings** message now includes the optional `RecordingFormat` field as well as the new `memory_access` field that allows you to activate either the Shared Memory Access or the Data Direct Memory Access. It is no longer possible to active simultaneously both Shared Memory Access and Data Direct Memory Access. When **DataAccessSettings** are not defined, only the Shared Memory Access is activated.
  - [Behavior breaking change] The new field `data_direct_memory_access` has been added to the **DataAccessSettings** message.
  - [Behavior breaking change] The new **DataDirectMemoryAccess** message has been added, it includes the **DataDirectMemoryAccessTarget** enum to define the target memory domain for Data Direct Memory Access: **CPU** or **GPU**.

#### Changes for new features in LPE

##### Raytraced Ambient Occlusion

There are now two possibilities for the ambient occlusion with LPE: Screen Space Ambient Occlusion or Ray Traced Ambient Occlusion.

- The **LightPropagationEngineSimulationParameters** message has been updated with the following changes and additions:

  - [Breaking change] `screen_space_ambient_occlusion` is now a oneof field.
  - [Breaking changes] The name of the fields in the **ScreenSpaceAmbientOcclusion** message have been renamed as follows:
    - `ssao_activation` to `activation`
    - `ambient_occlusion_amount` to `amount`
    - `ambient_occlusion_radius` to `radius`
    - `ambient_occlusion_power_exponent` to `power_exponent`
    - `ambient_occlusion_surface_bias` to `surface_bias`

- [Non-breaking change] The **RaytracedAmbientOcclusion** message has been added to the API, as well as its associated `raytraced_ambient_occlusion` oneof field in the **LightPropagationEngineSimulationParameters** message.

##### Raytraced Scene Renderer

- [Non-breaking change] The boolean field `raytraced_scene_renderer` has been added to the **LightPropagationEngineSimulationParameters** message.

##### Raytraced reflections

- [Non-breaking change] The boolean field `raytraced_reflections` has been added to the **LightPropagationEngineSimulationParameters** message.

#### Changes for the radar curvature consideration new feature

- [Non-breaking change] The new boolean field `use_curvature` has been added to the **RadarSimulation** message.

#### Deprecated fields removed

[Breaking changes] The below-listed deprecated fields have been removed.

- `recording_format` removed from the **SensorParameters** message. Use the oneof field `recording_format` in the **DataAccessSettings** message instead.

- `camera_ground_truth_parameters` removed from the **PbCameraSimulation** message. Instead, use the `RenderingParameters` field, the **RealTimeParameters** message and its `CameraGroundTruthParameters` field.

- `ray_density` removed from **RadarSimulation** message. Use the `grid_sampling` field instead.

- `number_of_ray_batches` removed from the **ManualBatching** message.

- The following fields have been removed from the **RenderingParameters** message:
  - `camera_near_plane`
  - `camera_far_plane`
  - `shadow_quality`
  - `texture_quality`
  - `antialiasing_factor`
  
  Instead, use he fields of the **RealTimeParameters** message.

#### Other change

In the **LightingSystemParameters** message, the `sampling_rate` field is now optional.

### world_update.proto

#### Changes for the Rain new feature in LPE

[Non breaking changes] The **Rain** and **Wind** messages have been added to the API, as well as the associated `rain`and `wind` fields added to the **Weather** message.

#### Fields renamed

[Breaking changes] The field  `streetLightsState` in the **EnvironmentUpdate** message has been renamed to `street_lights_state`.

### configuration.proto

[Breaking changes] The following deprecated fields have been removed from the **Configuration** message:

- `deploy_parameters`, use the `deploy_configuration` field instead.
- `lighting_system`, use the `lighting_system_configuration` field instead.

### deploy_parameters.proto

[Breaking changes] The deprecated **EndPointRange** message has been removed. Use the **DeployConfiguration** message instead. The parameters previously set using the fields `host`, `min_port` and `max_port` of the **EndPointRange** message must now be set using to the `local_nodes` fields in the **DeployConfiguration** message and the fields of the associated **LocalNodes** message: `min_port` and `max_port`.

### upload_data.proto

[Breaking changes] The deprecated field `resource_identifier` has been removed from the **UploadMetaData** message. Use the `values` map field instead.

## Changes to the Data Access service

### sensor_data_description.proto

[Breaking changes]  The following deprecated fields have been removed from the **SensorDataDescription** message:

- `data_id`
- `metadata`

Instead, use the `data_by_identifiers` repeated field and the **SensorDataInfo** message which includes the `data_id` and `metadata` fields.

## Changes to the Feedback Control service

### feedback_control_camera_parameters.proto

[Breaking changes] The deprecated field `focal_length` has been removed from the **Lens** message. Use one of the following fields instead: `simple_chromatic_aberration` or `advanced_chromatic_aberration` field.

## Changes to the Lighting System Control service

### lighting_system_state.proto

[Breaking changes] The deprecated field `light_functions` has been removed from the **LampState** message. Use the `light_functions_tags` field instead.

## Changes to the Sensor Data

### camera_output_data.proto

[Non breaking changes] The `tag_name` field has been added to the **BoundingBox3D** message.