# Sensors REST API changelog

This page lists the changes made to the Sensors REST API v6.

**Important note**

The Sensor Labs API server delivered in 2025 R1 does not support API v2 and prior version.
The Sensor Labs API server delivered in 2024 R2 does not support API v1.

## v6 2025 R1

Here are the changes introduced in the Sensors API v6 released in 2025 R1 compared to v6 released in 2024 R2.

### Behavior-breaking changes

- Sensors and Sensor Layouts created with Sensor Labs version inferior to 2022 R2, or with Sensors REST API v1, are no longer supported. Trying to upload such .camerax, .lidarx, .radarx, or .senscfgx files results in an error message.
- For JSON files and requests, the Sensor Labs APIs no longer rely on *NewtonsoftJson* SDK, but now use *System.Text.Json*, which is a native Microsoft API that requires properly formatted JSON. Since *NewtonsoftJson* SDK allows incorrect JSON syntax, such as the use of simple quotes instead of double quotes, some JSON requests or files that were allowed in the prior versions of the API are now considered invalid.
For details, please see [Migrate from Newtonsoft.Json to System.Text.Json](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft?pivots=dotnet-6-0#json-strings-property-names-and-string-valthues)

### New Features

#### Radar propagation output

- The class **Pre.Sensors.v6.Data.Sensor.Radar.Propagations.Propagation** has been added to the API. This new class contains the **CoherentProcessingInterval** property.
- The schema **Pre.Sensors.v6.Data.Sensor.Radar.Modes.Mode** contains the new **propagation** property.

#### Camera imager IP protection

- The **PUT /avx-sensorlabs/v6/{id}/protect** and **PUT /avx-sensorlabs/v6/{id}/unprotect** method can now be used to protect and unprotect the Imager section of a camera sensor. In the request body of those methods, the **Section** field now accepts the *CameraImager* string.
- The **protectedImagerPhysicsBased** (string) property has been added to the **Pre.Sensors.v6.Data.Sensor.Camera.Components.PhysicsBasedCamera** schema. The **protectedSize** (string) property has been added to the **Pre.Sensors.v6.Data.Sensor.Camera.Imager.ImagerCommon** schema. These two new properties are used in the response of the **GET /avx-sensorlabs/v6/sensors/{sensorId}** method (when equal to "Protected" it means that the sensor is protected).

#### Delete all sensors

- A new method has been added to delete all the sensors from the library: **DELETE /avx-sensorlabs/v6/sensors**.

#### Download all sensors

- A new method has been added to download all the sensors of the library in a .zip file: **GET /avx-sensorlabs/v6/packedsensors**.

## v6 2024 R2

Here are the changes introduced in the Sensors API v6 released in 2024 R2 compared to v5 released in 2024 R1.

All those changes are related to the IP Protection for Radar Models. Using this new feature, you can protect the antennas and the modes of a radar sensor.

- A new method has been added to enable the protection of a radar sensor with a password: **PUT /avx-sensorlabs/v6/{id}/protect**.
- A new method has been added to disable the protection of a radar sensor **PUT /avx-sensorlabs/v6/{id}/unprotect**.

- The following properties have been added to the **Pre.Sensors.v6.Data.Sensor.Radar.Radar** schema:

  - **protectedTxAntennas** (enumeration **System.Tuple'2[System.Int32,System.String]**)
  - **protectedRxAntennas** (enumeration **System.Tuple'2[System.Int32,System.String]**)
  - **protectedModes** (enumeration **System.Tuple'2[System.Int32,Pre.Sensors.v6.Data.Sensor.Radar.Modes.ProtectedMode]**)

    The **Pre.Sensors.v6.Data.Sensor.Radar.Radar** schema is used in:

    - **PUT /avx-sensorlabs/v6/sensors/{id}** (the **radarModel** property used in the request body and in the **200 OK** response)
    - **GET /avx-sensorlabs/v6/sensors/{id}** in the **200 OK** response

- The **Pre.Sensors.v6.Data.Sensor.Radar.Modes.ProtectedMode** class has been added to the API and to the **Pre.Sensors.v6.Data.Sensor.Radar.Radar** schema.

- The **isProtected** property (boolean) has been added to **SensorRead.SensorInfo** schema. This schema is used in the responses of the **GET /avx-sensorlabs/v6/sensors** method to list all the sensors available in the library)