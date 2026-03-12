# Changelog

This file lists the changes introduced in the Sensors API v3 released in 2026 R1 compared to v2 released in 2025 R2.

## Backward Compatibility

Sensor Layouts API v3 discontinues support for:

- Layouts containing Camera, LiDAR and Radar sensors created with the AVxcelerate Sensor Labs desktop versions prior to 2024 R1, or via the Sensors REST API versions earlier than v5.
- Layouts containing Thermal Camera sensors from any previous versions, i.e. the layouts delivered in the `ThermalCameras` folder of any previous version of the AVxcelerate Sensors Library, as well as any layouts contaning thermal camera sensors that you created, updated or uploaded in 2025 R2.

## Breaking changes

The response of the **POST /avx-sensorlabs/v3/sensorlayouts/packed** method now provides:

-  the `layoutId` (string) property instead of the `id` (string) property in previous versions,
- the `hadOldThermalCamera` (boolean) property indicating whether or not the sensor layout includes a thermal camera sensor in a version that is no longer supported.

In the request body of the **POST /avx-sensorlabs/v3/sensorlayouts/packed** method, the type of `sensorUpdatesJson` is no longer a string, it is now an array.
