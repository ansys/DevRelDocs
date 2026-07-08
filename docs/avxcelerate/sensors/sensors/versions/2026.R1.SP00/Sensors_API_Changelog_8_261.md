# Changelog

This file lists the changes introduced in the Sensors API v8, released in 2026 R1, compared to v7, released in 2025 R2.

## Backward Compatibility

The Sensor Labs API server delivered in 2026 R1 no longer supports the methods of the API v4 and prior versions.

Sensors API v8 discontinues support for:

- Camera, LiDAR and Radar sensors created with the AVxcelerate Sensor Labs desktop versions prior to 2024 R1, or via the Sensors REST API versions earlier than v5.
- Thermal Camera sensors included in the layouts delivered in previous versions of the AVxcelerate Sensors Library, edited using the **Thermal Camera Editor**, or uploaded to your 2025 R2 Sensor Library.

## New features

### Thermal camera full support

You can now read and create a thermal camera sensor using the **GET /avx-sensorlabs/v8/sensors/{id}** and **PUT /avx-sensorlabs/v8/sensors/{id}** methods thanks to the addition of new properties to the schema **Pre.Sensors.v8.Data.Sensor.Camera.Components.ThermalCamera**.

The **thermalCameraModel** object now includes the following properties:

- `lens` (object)
  - `focalLength` (number)
  - `fNumber` (number)
  - `fisheyeDistortion` (object)
    - `a1` (number)
    - `a2` (number)
    - `a3` (number)
    - `a4` (number)
    - `a5` (number)
  - `brownDistortion` (object)
    - `k1` (number)
    - `k2` (number)
    - `k3` (number)
    - `p1` (number)
    - `p2` (number)
  - `lensTransmission` (string)
  - `relativeIllumination` (string)
  - `pointSpreadFunction` (string)
- `protectedLens` (string)
- `imager` (object)
  - `sensitivity` (string)
  - `size` (object)
    - `width` (number)
    - `height` (number)
  - `nativeResolution` (object)
    - `width` (integer)
    - `height` (integer)
  - `temperature` (number)
  - `noise` (object)
    - `relativeNetd` (string)
    - `temporalNoise` (object)
      - `pixel` (number)
      - `vertical` (number)
      - `horizontal` (number)
    - `spatialNoise` (object)
      - `pixel` (number)
      - `vertical` (number)
      - `horizontal` (number)
- `protectedImager` (object)
  - `protectedImager` (string)
  - `nativeResolution` (object)
    - `width` (integer)
    - `height` (integer)
- `defaultPostProcessing` (object)
  - `temperatureWindow` (object)
    - `r` (number)
    - `b` (number)
    - `f` (number)
    - `o` (number)
  - `frameRate` (integer)
- `protectedDefaultPostProcessing` (object)
  - `protectedTemperatureWindow` (string)
  - `frameRate` (integer)
- `sensorOutput` (string)
  - `ThermalMap`, which is the only valid string for thermal camera sensorOutput in the enumeration

Use the **Pre.Sensors.v8.Data.Sensor.Camera.Components.ThermalCamera** schema when editing a thermal camera sensor through the **POST /avx-sensorlabs/v8/sensors** method.

In order to configure some of the thermal cameras parameters, the following types have been added to the *CameraExternalsEnum*:

- `ThermalRelativeIllumination`
- `ThermalPointSpreadFunction`
- `ThermalSensitivity`
- `ThermalRelativeNetd`

This enumeration is used in the `externalFileInfo` json string to be defined in the request body of the **GET /avx-sensorlabs/v8/sensors/{id}/externalfiles**, **DELETE /avx-sensorlabs/v8/sensors/{id}/externalfiles** and **PUT /avx-sensorlabs/v8/sensors/{id}/externalfiles** methods.

### IP protection for physics-based camera

In prior versions, only the imager of a physicas-based camera could be protected. Now, you can protect any of its components (namely lens, imager, default post processing, sensor output) or all of them.

In the request body of the **PUT /avx-sensorlabs/v8/{id}/protect** and **PUT /avx-sensorlabs/v8/{id}/unprotect** methods, the **section** property (string) is now an enumeration with the following possible values:

- `CameraImager`
- `CameraLens`
- `CameraDefaultPostProcessing`
- `CameraSensorOutput`
- `RadarAntenna`
- `RadarMode`
- `AllComponents`

Other changes have been made for this new feature, refer to [Breaking changes in PhysicsBasedCamera schema](#breaking-changes-in-physicsbasedcamera-schema).

### High Dynamic Range (HDR) physics-based cameras

In order to create High dynamic Range (HDR) camera models, it now possible to configure mulitple imagers in a camera sensor model.

> Note: Be aware that HDR camera simulation is not yet supported by AVxcelerate Sensors Simulator. If you include in your simumation camera models configured with multiple imagers, only the first imager (item [0]) will be used during the simulation.

- The `imagerPhysicsBased` (object) has been deleted, it is now replaced with `imagers` (object) so that several imagers can be configured in a single camera sensor.
- The `duplicationParameters` (object) property has been added to the **lensPhysicsBased** object so that . Set to null if not needed.
 This new property includes:
  - `sourceId` (integer)
  - `destinationId` (integer)

These changes are also listed in [Breaking changes in PhysicsBasedCamera schema](#breaking-changes-in-physicsbasedcamera-schema).

- `imagerId` has been added, see [External file management](#external-file-management).

### Breaking changes in PhysicsBasedCamera schema

Many breaking changes have been made to the schema **Pre.Sensors.v8.Data.Sensor.Camera.Components.PhysicsBasedCamera**, which is used in the response of the **GET /avx-sensorlabs/v8/sensors/{id}** method, as well as in both the request body and the response of the **PUT /avx-sensorlabs/v8/sensors/{id}** method.

The **physicsBasedCameraModel** object now includes the following properties:

- `lensPhysicsBased` (object)
  - `coatingTransmissionDistribution` (array)
  - `simpleChromaticAberration` (object)
  - `advancedChromaticAberration` (object)
  - `circularAperture` (object)
  - `regularConvexPolygonAperture`(object)
  - `lensDistortionPath` (string) - New property, moved from the `lensCommon` (object) property
  - `windshield` (object) - New property, moved from the `lensCommon` (object) property
- `lensCommon` (object)
  - `fisheyeDistortion` (object)
  - `brownDistortion` (object)
  - `lensTransmission` (string)
  **Note:** The `lensDistortionPath` (string) and `windshield` (object) properties have be removed from `lensCommon`, they are now in the `lensPhysicsBased` (object) property.
- `protectedLens`  (object) - New property
  - `protectedLensModel` (string) "Protected"
  - `windshield`  (object)
- `imagers` (object) (New property, replaces `imagerPhysicsBased` (object))
- `protectedImagers` (object) - New property, replaces `protectedImagerPhysicsBased` (string)
  - "0": "Protected"
- `imagerCommon` (object)
  - `size` (object)
  - `protectedSize` (string) "Protected" - New property
  - `resolution` (object)
    - `width` (integer)
    - `height` (integer)
- `defaultPostProcessing` (object) (replaces `customPostProcessing` (object) and  `electronics` (object))
 -  `gain` (number)
    - `frameRate` (integer)
    - `diffractionSpike` (boolean)
    - `bitDepthReduction` (integer)
    - `gammaCorrection` (number)
    - `timeEncoding` (object)
      - `row` (integer)
      - `column` (integer)
- `protectedDefaultPostProcessing` (object) - New property
  - `protectedDefaultPostProcessingModel` (string) "Protected"
  - `timeEncoding` (object)
    - `row` (integer)
    - `column` (integer)
  - `frameRate` (integer)
  - `diffractionSpike` (boolean)
- `sensorOutput` (object) replaces `sensorOutput` (string)
- `protectedSensorOutput` (object) - New property
 - `protectedSensorOutputModel` (string) "Protected"
 - `output` (string)
   Enumeration values:
   - `CameraOutput`
   - `ImagerOutput`
   - `LensOutput`
   - `ThermalMap`
- `duplicationParameters` (object) - New property
  - `sourceId` (integer)
  - `destinationId` (integer)

## Other breaking changes

### External file management

The methods to delete and get external files have changed:

- **DELETE` /avx-sensorlabs/v7/sensors/externalfiles/{id}** has been replaced with **DELETE /avx-sensorlabs/v8/sensors/{id}/externalfiles**.
- **GET /avx-sensorlabs/v7/sensors/{id}/externalfiles/{externalFileInfo}** has been replaced with **GET /avx-sensorlabs/v8/sensors/{id}/externalfiles**.

For the method to update a sensor definition by uploading an external file, **PUT /avx-sensorlabs/v8/sensors/{id}/externalfiles**, the following properties are now required in the request body:

- `file` (string($binary))
- `externalFileInfo` (string)

The `externalFileInfo` input parameter for the methods upload, download and delete an external file for a camera sensor now expects an `imagerId`.

For example: 
{
    "radarInfo": null,
    "lidarInfo": null,
    "cameraInfo": {
       "CameraExternalsEnum": "CfaTransmissionR",
       "ImagerId": "0"
    }
}

For external files that are not in the imager, the imager id must be null.

### Sensor upload

For the method to upload multiple packed sensors and add them to the library, **POST /avx-sensorlabs/v8/sensors/packed**:

- the `files` property is now required in the request body,
- the type of `sensorUpdatesJson` used in the in the request body is no longer a string, it is now an array,
- `retroCompatibilityInfo` is no longer present in the response body,
- the response body now includes the `isOldThermal` element indicating whether the sensor model is a thermal camera in a version that is no longer supported or not.
