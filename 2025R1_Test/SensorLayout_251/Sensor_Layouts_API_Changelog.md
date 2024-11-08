# Sensor Layouts REST API Changelog

This page lists the changes made to the Sensor Layouts REST API v1.

## v1 2025 R1

Here are the changes introduced in the Sensor Layouts API v1 released in 2025 R1 compared to v1 released in 2024 R2.

### Behavior-breaking changes

- Sensors and Sensor Layouts created with Sensor Labs version inferior to 2022 R2 or with Sensors REST API v1 are no longer supported. Trying to upload such .camerax, .lidarx, .radarx, or .senscfgx files results in an error message.
- For JSON files and requests, the Sensor Labs APIs no longer rely on *NewtonsoftJson* SDK, but now use *System.Text.Json*, which is a native Microsoft API that requires properly formatted JSON. Since *NewtonsoftJson* SDK allows incorrect JSON syntax, such as the use of simple quotes instead of double quotes, some JSON requests or files that were allowed in the prior versions of the API are now considered invalid.
For details, please see [Migrate from Newtonsoft.Json to System.Text.Json](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/migrate-from-newtonsoft?pivots=dotnet-6-0#json-strings-property-names-and-string-valthues)

### New Features

A new method has been added to delete all the sensor layouts from the library: **DELETE /avx-sensorlabs/v1/sensorLayouts**.

The following properties have been added to the **LayoutEdit.Layout.Metadata** schema:

- **cameraCount**
- **fisheyeCameraCount**
- **radarCount**
- **flashingLidarCount**
- **rotatingLidarCount**

The **LayoutEdit.Layout.Metadata schema** is used in the body response (200 OK) of **GET ​/avx-sensorlabs​/v1​/sensorlayouts** (method to get the list of all sensors layouts available in the library).