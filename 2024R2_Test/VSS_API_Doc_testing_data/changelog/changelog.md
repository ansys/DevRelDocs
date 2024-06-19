# VSS API Changelog

This document lists all the changes introduced in VSS API version 2024 R2 compared to version 2024 R1.

## Changes to the Simulation service

### configuration.proto

The **Configuration** message has been modified so that multiple lighting systems can now be loaded, and one of them set as active.

`lighting_system` is now a deprecated field, the new `LightingSystemConfiguration` field must be used instead.

The **LightingSystemConfiguration** message has been added.

In the **LightingSystem** message:

- the `identifier` field has been added,
- the `bytes lighting_system_data` pre-existing field has been moved into a oneOf,
- the `resource` field has been added to a oneOf, so that it is now possible to load a lighting system that has been uploaded using the **resourceUploader** service.

### simulation_parameters.proto

The `use_rgb_diffuse` field, which is a beta parameter, has been added to the **LidarSimulation** message so that the textures of assets can be considered in LiDAR simulation.

In the **RadarSimulation** message:

- `ray_density` is now a deprecated field, the new `grid_sampling` field must be used instead,
- the new **RadarGridSampling** message has been added as well as the new **RadarGridSamplingParameters** message. Radar grid sampling parameters are delivered as a beta feature in the current release.

The **SensorParameters** message has been updated:

- the `recording_format` field is now deprecated, use the new `DataAccessSettings` field instead,
- the `data_access_settings` field has been added.

The **DataAccessSettings** message has been added, it includes the following two fields:

- `recording_format` (this field replaces the above-mentioned deprecated field),
- `shared_memory_access`, whose type is `boolean`. The production of sensor data in the shared memory can now be disabled.

## New LightingSystem service

A new **LightingSystem** service has been added so that the active lighting system can be changed. This new service is exposed in the new *lighting_system.proto* file located in the *lighting_system_control* folder.

## Changes to the Resource Uploader service

### upload_data.proto

In order to expand the API’s resource uploading capabilities, the **UploadMetaData** message has been updated:

- `resource_identifier` is now a deprecated field (the new below-listed field must be used instead)
- the new `values` field has been added to improve resource handling. This field enables the API to support a broader range of resource uploads, including those without a standard identifier.
