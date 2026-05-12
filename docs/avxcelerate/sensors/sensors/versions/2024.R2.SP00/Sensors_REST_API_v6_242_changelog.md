# Changelog

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