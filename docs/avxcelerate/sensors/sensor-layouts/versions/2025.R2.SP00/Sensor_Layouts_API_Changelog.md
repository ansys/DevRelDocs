# Sensor Layouts REST API Changelog

This file lists the changes introduced in the Sensor Layouts API v2 released in 2025 R2 compared to v1 released in 2025 R1.

## New Feature

### Layout containing Thermal Camera can be imported/exported

A .senscfgx file containing a reference to a .thermalpbcam can now be imported in the layout library (and the thermal camera will be visible - but not editable - in the sensor library).

A layout containing a reference to a .thermalpbcam can now be exported from the library as a .senscfgx file.

The **Metadata** object when listing all layouts now also has a **thermalCameraCount** property.

## Other Breaking Changes

### LayoutFilter

The **GET /sensorlayouts** endpoint parameters now include an optional **LayoutFilter** (instead of the previous strings for pattern and name), with its parameters described below:

- **Pattern** - string value to filter by name
- **SensorType** - can be:
    - **Camera**,
    - **FisheyeCamera**,
    - **ThermalCamera**,
    - **RotatingLidar**,
    - **FlashingLidar**,
    - **Radar**
- **VehicleModel**
- **Manufacturer**
- **Version**

### SensorInfo.Id.Id nesting reduced

When reading the layout data, the **sensorInfo** property that used to contain an id, that contained an id, is now simplified to directly have the id value at the first level.
