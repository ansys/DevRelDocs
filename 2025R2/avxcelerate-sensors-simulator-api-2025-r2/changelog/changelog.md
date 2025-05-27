# Changelog

This document lists all the changes introduced in AVX Sensors Simulator API version 2025 R2 compared to version 2025 R1.

## Changes to tag_colors.proto

[Non-breaking change] The **Color** message has been removed from the `tag_colors.proto` file. This message, which is used as field for other messages of the API, is now in the new `colors.proto` file.

## Changes in Sensor Data

- [Non-breaking change] The **BoundingBox3D** message has been added to the `camera_output_data.proto` file.

- [Non-breaking change] The `bounding_box_3d` field has been added to the **CameraDataEntry** message in to the `sensor_data.proto` file.

## Changes to the Simulation service

### simulation_parameters.proto

- [Binary breaking change] The `generate_temperature_map` field has been removed from the **ThermalCameraSimulation** message.

- [Non-breaking change] The `enable_surface_smoothing` field has been added to the **LidarSimulation** message.

- [Non-breaking changes] The following field and message have been added so that the parameters of the Light Propagation Engine can be set for camera sensors.

    - The `lpe_parameters` field has been added to the `oneof specific_parameters` field in the **RenderingParameters** message.
    - The **LightPropagationEngineSimulationParameters** message has been added.

### world_update.proto

- [Non-breaking change] The `weather` field has been added to the `oneof value` field in the **EnvironmentUpdate** message.
- [Non-breaking change] The **Weather** and **Fog** messages have been added.

## Changes to the LightingSystemControl service

### lighting_system_state.proto.proto

It is now possible to update only some properties of a lamp (using the **Set** method of the *LightingSystemControl*) thanks to the following changes made to the **LampState** message:

- [Non-breaking change] the `flux` field is now optional,
- [Binary breaking changes] the `light_functions` field has been deprecated and replaced with the new `light_functions_tags` field. The type of this field is the new **LightFunctionTags** message.
  > The return of the **Get** method of the *LightingSystemControl* service now includes both the `light_functions` field and the `light_functions_tags` field.
  When updating a lamp using the **Set** method of the *LightingSystemControl*, you must set only one of those two fields, preferably the new `light_functions_tags` field.

[Non-breaking change] The `pixel_beam_state` field has been added to the **ModuleState** message. The type of this field is the new **PixelBeamState** message.
  > Pixel beam is delivered as a beta feature in this release.

## Changes to the FeedbackControl service

### feedback_control_radar_parameters.proto

[Non-breaking changes] The following changes have been made so that the phase noise of FMCW radars (System or Performance) can be updated through feedback control:

- The `phase_noise` field has been added to the **Mode** message, it can be set using either the `pedestal_parametric_phase_noise` or the `piecewise_linear_phase_noise` field.
- The corresponding **PedestalParametricPhaseNoise** and **PiecewiseLinearPhaseNoise** messages have also been added.

[Non-breaking changes] The following changes have been made so that range filters can be updated through feedback control:

- The `range_filter_1` and `range_filter_2` fields have been added to the **Mode** message.
- The associated **RangeFilter** and **RollOffPoint** messages have also been added.