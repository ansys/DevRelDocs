# Changelog

This file lists the changes introduced in the Sensor API v7, released in 2025 R2, compared to v6, released in 2025 R1.

**Important note**

The Sensor Labs API server delivered in 2025 R2 does not support API v3 and prior versions.

## New Features

### Radar Range Filters

The schema **Pre.Sensors.v7.Data.Sensor.Radar.Modes.Mode** contains the new **RangeFilters** property, which is a list of maximum of 2 elements and its default value is null.

The **RangeFilter** parameters are described below:

- **FilterPassType** - can be **LowPass** or **HighPass**
- **RangeCutOff** - double value

and one of the following 3: (the other 2 should be set to null)
- **IdealRollOff**
- **ByOrderRollOff**
    - **Order** - double value in [1, 50]
- **ByPointRollOff**
    - **RangeStop** - double value > 0
    - **StopLevel** - double value < 0

### Radar Phase Noise

The schema **Pre.Sensors.v7.Data.Sensor.Radar.Modes.Mode** contains the new **PhaseNoise** property with its default value null.

The **PhaseNoise** parameters are described below:

 one of:
 - **Preset** - can be **Low**, **Medium** or **High**
 - **PedestalParametricModel**
    - **PhaseNoisePower** - double value <=0
    - **PedestalWidth** - double value > 0
    - **RollOffOrder** - double value > 1
    
 - **PiecewiseLinearModelFile** - name of external file

 > Important note: The **PiecewiseLinearModelFile** is updated/downloaded/deleted via the dedicated endpoints for *external files* an it should not be changed in the json when updating the sensor with properties.

### Thermal Camera import/export

A thermal camera can be downloaded from the sensor library into a packed .*thermalpbcamx* file.

A .*thermalpbcamx* file can be imported into the sensor library.

> Important note: The edition of the thermal camera sensor is not available in this release.

## Other Breaking Changes

### SensorFilter

The **GET /sensors** endpoint parameters now include an optional **SensorFilter** (instead of the previous strings for *pattern* and *name*), with its parameters described below:

- **Pattern** - string value to filter by name
- **SensorType** - can be 
    - **Camera**, 
    - **FisheyeCamera**, 
    - **ThermalCamera**, 
    - **RotatingLidar**,
    - **FlashingLidar**, 
    - **Radar**
- **ModelName** 
- **Manufacturer** 
- **Version**
- **Compatibility** - can be **Avx**, **Speos**, **AvxAndSpeos**, **None** (for Radar only)
- **Status** - can be **Protected**, **Unprotected**, **Correct**, **Violating**, **Wrong**

### ExternalFileInfo structure

Radar Antenna's **PatternTable** and Flashing Lidar Emitter's **IntensityFilePath** files were not handled like the rest of the external files in the other sensors. All the external files are now handled in the same way, and to achieve this, the following changes had to be done:

- **PUT sensors/{id}/externalfiles**
- **GET sensors/{id}/externalfiles/{externalfileinfo}**
- **DELETE sensors/externalfiles/{id}**

All these endpoints now use the **externalFileInfo** parameter (was present before in PUT and GET, but with different structure) with these parameters:

one of (other 2 are set to null)

- **RadarInfo**
    - **Id** - integer value >= 0
    - **RadarExternalsEnum** - can be:
        - **TransmitterWeightingSequence**
        - **ChirpSequence**
        - **PulseSequence**
        - **PiecewiseLinearModelSequence**
        - **PatternTableFile**
    - **RadarItemType** - can be: **Tx**, **Rx** or **Mode**
- **LidarInfo**
    - **LidarExternalsEnum** - can be:
        - **FiringSequenceFilePath**,
        - **IntensityFilePath**,
        - **LidarLensDistortion**
- **CameraInfo**
    - **CameraExternalsEnum** - can be:
        - **CfaTransmissionR**,
        - **CfaTransmissionG**,
        - **CfaTransmissionB**,
        - **QuantumEfficiency**,
        - **LensTransmission**,
        - **CameraLensDistortion**,
        - **FragmentShader**

### AntennaCopyParameters repurposing

In **Pre.Sensors.v7.Data.Sensor.Radar.Radar**, the previously called *AntennaCopyParameters* property, useful in the case of antenna duplication, was renamed to **CopyParameters** and is now required for mode duplication too. Below its structure:
- **RadarItemType** - can be Tx, Rx, Mode
- **SourceId** - integer value >= 0
- **DestinationId** - integer value >= 0