# Co-simulation with AVxcelerate Sensor (Beta)

## Introduction

The Simulation Framework provides a built-in support for co-simulation with ANSYS AVxcelerate Sensor, enabling high-fidelity sensor simulation within the simulation environment. The AVxcelerate Sensor co-simulation feature allows you to integrate realistic sensor models (cameras, lidars, radars, etc.) that can process the ground truth data from the simulation and provide sensor-specific outputs.

**Note**: Simfwk supports AVxcelerate Sensor v261 version.

The co-simulation architecture consists of several key components:

- **AVxcelerate Sensor Connector Activity**: A built-in activity that manages the communication with AVxcelerate Sensor service connection
- **AVxcelerate VSS API Adapter**: Handles gRPC communication with the AVxcelerate Sensor service
- **OSI to VSS Converter**: Converts Open Simulation Interface (OSI) data to AVxcelerate VSS format (optional)
- **Configuration System**: Manages co-sim specs, like sensor configuration, object mappings, and connection parameters

The AVxcelerate Sensor co-simulation operates by:

1. Receiving ground truth data from the gt-gen (OSI SensorView)
2. Converting the data to AVxcelerate VSS format (optional)
3. Sending the data to the AVxcelerate Sensor service via gRPC
4. Processing AVxcelerate Sensor logic
5. Retrieving sensor outputs (coming soon)

## Add one AVxcelerate Sensor activity

To add an AVxcelerate Sensor activity to your simulation, you need to configure it in the simulation scheduling section of your configuration file. Creation of one generic AVxcelerate Sensor activity is available as `built-in` type.

## Basic configuration

Add the following activity configuration to your `simulation_scheduling.activities` array:

```json
{
    "name": "avx_camera_sensor_activity",
    "depends_on": [
        "groundtruth_generator_activity"
    ],
    "type": "built-in",
    "avx_sensor_setting": {
        "use_vss_osi_api": false,
        "do_load": true,
        "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
        "timeout_in_sec": 300
    }
}
```

## Configuration parameters

Based on which kind of sensor actually runs the AVxcelerate Sensor Service, you can give the activity a specific `"name"`. It is identified as AVxcelerate Sensor activity once you specify the `"avx_sensor_setting"` field.

The `avx_sensor_setting` object contains the following parameters:

| Parameter          | Type    | Required | Description                                                                                                                                                                                                                         |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `do_load`          | boolean | Yes      | Whether to load the AVxcelerate Sensor configuration. Set to `true` to do `LOAD` API of the AVxcelerate Sensor, `false` to skip LOAD API (Cluster use-case).                                                                        |
| `config_file`      | string  | Yes      | Path to the co-sim AVxcelerate Sensor configuration file (JSON format). This file contains sensor-specific settings, gRPC connection details, and object mappings. See [Co-sim configuration](#co-sim-configuration) section below. |
| `timeout_in_sec`   | integer | Yes      | Timeout in seconds for all gRPC calls to the AVxcelerate Sensor service. Default is 30 seconds.                                                                                                                                     |
| `use_vss_osi_api`  | boolean | No       | Whether to use VSS OSI API directly instead of converting OSI data to VSS format. Set to `true` to use native OSI support in VSS API (requires AVxcelerate Sensor v261+), `false` to use OSI to VSS conversion by Simfwk. Default is `false`. **Note**: If set to `true`, the AVx sensors process must be started with `-osi` mode. |
| `transport_mode`   | object  | No       | Transport mode configuration for gRPC communication. See [Transport Mode Configuration](#transport-mode-configuration) section below for details. Default is `insecure` mode. |

## Transport Mode Configuration

The AVxcelerate Sensor co-simulation supports different gRPC transport modes for communication with the AVxcelerate Sensor service. You can configure the transport mode in the `avx_sensor_setting` section of your simulation configuration.

## Configuration

Add the `transport_mode` object to your `avx_sensor_setting` configuration:

```json
{
    "name": "avx_camera_sensor_activity",
    "type": "built-in",
    "avx_sensor_setting": {
        "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
        "transport_mode": {
            "mode": "insecure",
            "uds_socket_id": "optional_socket_id",
            "uds_custom_path": "/optional/custom/path"
        }
    }
}
```

## Transport Mode Parameters

| Parameter          | Type   | Required | Description                                                                                                                                    |
| ------------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`             | string | No       | Transport mode to use. Valid values: `"insecure"`, `"mtls"`, `"unix_domain_socket"`. Default is `"insecure"`.                                  |
| `uds_socket_id`    | string | No       | Socket ID for Unix Domain Socket mode. Used to construct the socket filename (e.g., `vss-<socket_id>.sock`). If empty, defaults to `vss.sock`.   |
| `uds_custom_path`  | string | No       | Custom path for Unix Domain Socket mode. Overrides the default location (`<USER_HOME_DIRECTORY>/.conn`). If not specified, uses default path. |

## Transport Modes

The following transport modes are supported:

## 1. Insecure Mode (Default)

**Mode value**: `"insecure"`

**Default behavior**:
- Uses unencrypted gRPC communication
- No authentication or encryption
- Suitable for local development and testing
- Fastest communication method
- **Security**: No protection against eavesdropping or man-in-the-middle attacks

**When to use**: Local development, testing environments, or when security is not a concern.

**Example configuration**:
```json
{
    "avx_sensor_setting": {
        "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
        "transport_mode": {
            "mode": "insecure"
        }
    }
}
```

**Note**: If `transport_mode` is not specified, the system defaults to insecure mode for backward compatibility.

## 2. Mutual TLS (mTLS) Mode

**Mode value**: `"mtls"`

**Default behavior**:
- Uses encrypted gRPC communication with mutual TLS authentication
- Both client (Simfwk) and server (AVxcelerate Sensor) authenticate each other using certificates
- Provides end-to-end encryption and authentication
- **Certificate location**: The system looks for certificates in the following order:
  1. Path specified by `ANSYS_GRPC_CERTIFICATES` environment variable
  2. Default location: `certs` subfolder under the application directory
- **Required certificate files**:
  - `client.crt` - Client certificate
  - `client.key` - Client private key
  - `ca.crt` - Certificate Authority (CA) certificate

**When to use**: Production environments, distributed systems, or when secure communication is required.

**Example configuration**:
```json
{
    "avx_sensor_setting": {
        "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
        "transport_mode": {
            "mode": "mtls"
        }
    }
}
```

**Setup requirements**:
1. Set the `ANSYS_GRPC_CERTIFICATES` environment variable to point to your certificates folder, or
2. Place the certificate files (`client.crt`, `client.key`, `ca.crt`) in the `certs` subfolder under your application directory
3. Ensure the AVxcelerate Sensor service is configured to use the same CA certificate for server-side authentication

**Note**: For detailed information on certificate setup and mTLS configuration, please refer to the AVx Sensors documentation.

## 3. Unix Domain Socket (UDS) Mode

**Mode value**: `"unix_domain_socket"`

**Default behavior**:
- Uses Unix Domain Socket for local inter-process communication
- **Connection validation**: Only supports `localhost` or `127.0.0.1` as the endpoint host
- **Socket location**:
  - If `uds_custom_path` is specified: `<uds_custom_path>/vss-<socket_id>.sock` (or `vss.sock` if `socket_id` is empty)
  - If `uds_custom_path` is not specified: `<USER_HOME_DIRECTORY>/.conn/vss-<socket_id>.sock` (or `vss.sock` if `socket_id` is empty)
  - Falls back to system temp directory if `HOME` (Linux) or `USERPROFILE` (Windows) environment variable is not set
- **Performance**: Faster than TCP/IP for local communication
- **Security**: Limited to local machine only

**When to use**: Local communication on the same machine, when you want to avoid network stack overhead, or for containerized deployments on the same host.

**Example configuration with socket ID**:
```json
{
    "avx_sensor_setting": {
        "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
        "transport_mode": {
            "mode": "unix_domain_socket",
            "uds_socket_id": "sensor_123"
        }
    }
}
```

**Example configuration with custom path**:
```json
{
    "avx_sensor_setting": {
        "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
        "transport_mode": {
            "mode": "unix_domain_socket",
            "uds_socket_id": "sensor_123",
            "uds_custom_path": "/tmp/avx_sockets"
        }
    }
}
```

**Important notes**:
- The `grpc_endpoint` host must be `localhost` or `127.0.0.1` when using UDS mode
- The port in `grpc_endpoint` is ignored for UDS mode
- The socket file must be accessible by both Simfwk and AVxcelerate Sensor processes
- Ensure the AVxcelerate Sensor service is configured to use the same socket path

## Cross-Reference with AVx Sensors Documentation

For detailed information about transport modes, certificate setup, and AVxcelerate Sensor service configuration, please refer to the official **AVx Sensors documentation**. The transport mode implementation in Simfwk follows the same patterns and defaults as the AVx Sensors VSS API to ensure compatibility.

**Key areas to check in AVx Sensors documentation**:
- Transport mode configuration and requirements
- Certificate generation and setup for mTLS
- Unix Domain Socket path configuration
- Server-side transport mode settings
- Network and security considerations

## Dependencies

The AVxcelerate Sensor activity subscribes to `SensorViewTopic` as input and hence depends on the `groundtruth_generator_activity` to receive the simulation's ground truth data. This ensures that the sensor receives the latest world state before processing.

## Activity behavior

The AVxcelerate Sensor activity:

1. **Subscribes** to `SensorViewTopic` to receive ground truth data
2. **Initializes** the AVxcelerate Sensor service connection during startup
3. **Processes** the ground truth data:
   - If `use_vss_osi_api` is `true`: Sends OSI SensorView directly to AVxcelerate Sensor using VSS OSI API (requires AVxcelerate Sensor v261+ with `-osi` option)
   - If `use_vss_osi_api` is `false`: Converts OSI SensorView moving objects to AVxcelerate VSS `WorldUpdate` format
4. **Sends** the data to the AVxcelerate Sensor service via gRPC
5. **Unloads** the corresponding AVxcelerate Sensor at the end of its lifecycle

## Co-sim configuration

The AVxcelerate Sensor co-simulation requires a dedicated configuration file that specifies the sensor setup, connection parameters, and object mappings.

## Configuration file structure

The AVxcelerate Sensor configuration file must be in JSON format and contain the following structure:

```json
{
  "AvxSensorConfig": "path/to/sensor_config.sencfgx",
  "AvxSensorParameter": "path/to/sensor_parameter.json",
  "GrpcPort": 54321,
  "GrpcHost": "localhost",
  "Track": "/path/to/track/file.track",
  "ObjectMapping": [
    {
      "OpenScenarioObjectName": "Ego",
      "AVxAsset": "/path/to/avx/ego.asset"
    },
    {
      "OpenScenarioObjectName": "SideVehicle",
      "AVxAsset": "/path/to/avx/side_vehicle.asset"
    }
  ]
}
```

## Configuration fields

| Field                | Type    | Required | Description                                                                                                                         |
| -------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `AvxSensorConfig`    | string  | Yes      | Path to the AVxcelerate Sensor configuration file (`.sencfgx` format). This file defines the sensor type, parameters, and behavior. |
| `AvxSensorParameter` | string  | Yes      | Path to the AVxcelerate Sensor parameter file (JSON format). Contains simulation-specific parameters for the sensor.                |
| `GrpcPort`           | integer | Yes      | gRPC port for communication with the AVxcelerate Sensor service. Must be between 0 and 65535.                                       |
| `GrpcHost`           | string  | Yes      | gRPC host address for the AVxcelerate Sensor service.                                                                               |
| `Track`              | string  | Yes      | Path to the track file used by the AVxcelerate Sensor. The file must be accessible to the AVxcelerate Sensor service.               |
| `ObjectMapping`      | array   | Yes      | Array of object mappings between `OpenScenario` objects and AVxcelerate Sensor assets.                                              |

## Object mapping

The `ObjectMapping` array defines how objects in your `OpenScenario` file correspond to AVxcelerate Sensor assets. Here is an example where two `OpenScenario` objects map to AVxcelerate assets. 
Note that based on which AVxcelerate Sensor version is used, the path towards asset files could be different. 

```json
"ObjectMapping": [
  {
    "OpenScenarioObjectName": "Ego",
    "AVxAsset": "/opt/Ansys/AVX_Library_v261/Assets/Dynamic/audi_a1_2010_blue.asset"
  },
  {
    "OpenScenarioObjectName": "SideVehicle",
    "AVxAsset": "/opt/Ansys/AVX_Library_v261/Assets/Dynamic/firetruck_generic_2000_de_red.asset"
  }
]
```

- `OpenScenarioObjectName`: The name of the object as defined in your `OpenScenario` file
  - The name can be found under `Entities/ScenarioObject:name` in the `*.xosc` file

    ```xml
    <Entities>
        <ScenarioObject name="Ego">
            <CatalogReference catalogName="vehicle_catalog" entryName="car"></CatalogReference>
        </ScenarioObject>
        <ScenarioObject name="SideVehicle">
            <CatalogReference catalogName="vehicle_catalog" entryName="car"></CatalogReference>
        </ScenarioObject>
    </Entities>
    ```

- `AVxAsset`: Path to the corresponding AVxcelerate asset file (`.asset` format). Note that Simfwk only sends the path as string to AVxcelerate Sensor as configuration; the asset files must be resolvable by AVxcelerate Sensor itself.

## Example configuration

Here's a complete example Simfwk configuration for AVxcelerate Sensor co-simulation:

```json
{
    "simulation_parameters": {
        "input_open_scenario": "data/test_scenario_motoway_avx_sensor.xosc",
        "input_driver_input": "data/driver_input_default.json",
        "input_user_settings": "data/UserSettings.ini",
        "output_directory": "/tmp/simfwk-out",
        "job_id": "simulation_framework"
    },
    "simulation_scheduling": {
        "sim_instance_name": "gt_gen_with_avx_sensor",
        "foxglove": {
            "data_streaming": false,
            "host_name": "localhost",
            "port": 8769
        },
        "save_mcap": true,
        "activities": [
            {
                "name": "groundtruth_generator_activity",
                "is_primary_activity": true,
                "topics_cycling_info": [
                    {
                        "topic_id": "__all__",
                        "topic_cycle_time_in_ms": 200
                    }
                ],
                "type": "built-in"
            },
            {
                "name": "dummy_tpm_activity",
                "depends_on": [
                    "groundtruth_generator_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "dummy_driver_activity",
                "depends_on": [
                    "groundtruth_generator_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "kpi_evaluator_activity",
                "depends_on": [
                    "dummy_driver_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "kpi_logger_activity",
                "depends_on": [
                    "kpi_evaluator_activity"
                ],
                "type": "built-in"
            },
            {
                "name": "generic_avx_sensor_activity",
                "depends_on": [
                    "groundtruth_generator_activity"
                ],
                "type": "built-in",
                "avx_sensor_setting": {
                    "use_vss_osi_api": false,
                    "do_load": true,
                    "sensor_data_access": {
                        "enabled": false,
                        "publish_topic_name": "AvxSensorDataTopic"
                    },
                    "config_file": "co_sim/avx_sensor/avx_configs/avx_cosim_config.json",
                    "timeout_in_sec": 300
                }
            }
        ]
    }
}
```
## Sensor Data Access

The AVxcelerate Sensor co-simulation provides access to sensor output data through a configurable data access mechanism. This feature allows other activities in the simulation framework to receive and process sensor data generated by the AVxcelerate Sensor service.

## Configuration

Sensor data access can be enabled through the `sensor_data_access` configuration section in your simulation settings:

```json
...
{
    "name": "avx_camera_sensor_activity",
    "depends_on": [
        "groundtruth_generator_activity"
    ],
    "type": "built-in",
    "avx_sensor_setting": {
        "do_load": true,
        "sensor_data_access": {
            "enabled": true,
            "publish_topic_name": "AvxSensorDataTopic"
        },
        "config_file": "<path-to>/avx_cosim_config.json",
        "timeout_in_sec": 300
    }
}
...
```

## Configuration parameters in "sensor_data_access"

| Parameter            | Type    | Required | Description                                                                                                                     |
| -------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`            | boolean | Yes      | Whether to enable sensor data access. Set to `true` to publish sensor data to the specified topic.                              |
| `publish_topic_name` | string  | Yes      | The name of the topic where sensor data will be published. Other activities can subscribe to this topic to receive sensor data. |

## Data format

When sensor data access is enabled, the AVxcelerate Sensor activity publishes sensor data to the specified topic in the following format:

- **Topic**: The topic name specified in `publish_topic_name`
- **Message Type**: `rtidds::GenericBytesMessage`
- **Content**: Serialized sensor data descriptions containing metadata and data references

## Usage in other activities

Other activities in the simulation framework can subscribe to the sensor data topic to receive and process sensor outputs. For example, a visualization activity could subscribe to receive camera images, or a perception activity could receive lidar point clouds.

Example subscription in another activity:

```cpp
#include <co_sim/avx_sensor/avx_vss_api_adapter/avx_vss_api_adapter.h>
...
AddSubscriber<core::Topic<rtidds::GenericBytesMessage>>(
    "AvxSensorDataTopic", [&](const rtidds::GenericBytesMessage& sd_message) {
        if (sd_message.size() > 0)
        {
            // Deserialize and process sensor data
            auto sensor_data_descriptions = 
                avx_sensor_cosim::AvxVssApiAdapter::DeserializeSensorDataDescriptions(sd_message.bytes_array());
            // Process the sensor data...
        }
    });
```
To deserialize the `SensorDataDescription` from received bytes in the topic, a static method `DeserializeSensorDataDescriptions(bytes)` is provided in `AvxVssApiAdapter` class.

## Data retrieval

To access the actual sensor data content, activities need to:

1. **Subscribe** to the sensor data topic to receive data descriptions
2. **Use the VSS API** to retrieve the actual sensor data using the data IDs from the descriptions
3. **Parse the data** according to the sensor type and format

Example data retrieval:

```cpp
#include <avx/vss/data_access/sensor_data_access.shm.h>

vss::data_access::DataAccessClient data_access_client(grpc_channel_);
for (const auto& sensor_data_description : received_sensor_data_descriptions_)
{
    // Retrieve actual sensor data
    vss::data_access::SensorDataBuffer sd_buffer =
        data_access_client.RequestDataQuery(sensor_data_description.data_id());
    vss::sensor_data::SensorData sensor_data;
    sensor_data.ParseFromString(sd_buffer.data());
    
    // Process the sensor data based on type
    if (sensor_data.has_camera_data())
    {
        // Handle camera data
        vss::sensor_data::CameraData camera_data = sensor_data.camera_data();
        // Process camera images...
    }
    else if (sensor_data.has_lidar_data())
    {
        // Handle lidar data
        // Process point clouds...
    }
}
```

## Supported sensor types

The sensor data access mechanism supports various sensor types including:

- **Camera sensors**: Image data with metadata (width, height, pixel format, etc.)
- **Lidar sensors**: Point cloud data
- **Radar sensors**: Radar detection data
- **Thermal cameras**: Temperature map data

Each sensor type provides specific metadata and data formats that can be accessed through the VSS API.

## Prerequisites and Setup

Before using AVxcelerate Sensor co-simulation, ensure you have:

1. **AVxcelerate Sensor Service**: A running AVxcelerate Sensor service accessible via gRPC endpoint
2. **Valid License**: Proper ANSYS license setup for AVxcelerate Sensor and Simfwk
3. **Asset Files**: Required AVxcelerate asset files (`.asset` format) for your simulation objects and resolvable by AVxcelerate Sensor
4. **Track Files**: Required AVxcelerate Track files (`.track` format) for your simulation objects and resolvable by AVxcelerate Sensor
5. **Sensor Configurations**: Valid sensor configuration files (`.sencfgx` and parameter files, generated by AVxcelerate Sensor Lab)

## Network configuration

The AVxcelerate Sensor co-simulation uses gRPC for communication. Ensure:

- The specified `GrpcHost` and `GrpcPort` are accessible
- No firewall restrictions block the gRPC connection
- The AVxcelerate Sensor service is running and listening on the specified endpoint

## File paths

All file paths in the configuration can be:

- **Absolute paths**: Full system paths (e.g., `/opt/Ansys/AVX_Library_v261/Assets/...`)
- **Relative paths**: Relative to the working directory when running the simulation

## Troubleshooting

1. **Connection timeout**
   - Example of timeout error by start-up connection

     ```bash
     [INFO ][AVxcelerate Sensor Connection] Waiting for connection to AVxcelerate Sensor Simulation Service at localhost:54321, Time out in 60 seconds
     [ERROR][AVxcelerate Sensor Connection] Timeout waiting for gRPC channel connection localhost:54321 after 60 seconds
     [ERROR][AvxSensorActivity] Failed to load AVxcelerate Sensor generic_avx_sensor_activity at endpoint: localhost:54321, please check the AVxcelerate Sensor configuration file: co_sim/avx_sensor_configuration/test_configs/valid_config.json and network connection.
     std::runtime_error 
     what(): Failed to load AVxcelerate Sensor
     ```

   - How to solve:
     - Verify the AVxcelerate Sensor service is running and correct gRPC endpoint is set
     - Check network connectivity and firewall settings
     - Increase the `timeout_in_sec` value if needed
2. **Connection drop**
   - If the AVxcelerate Sensor service dies during simulation or the connection is broken, the simulation will be aborted on the Simfwk side and the `Unload` operation will also likely timeout. In this case, you might have some outputs from both Simfwk and AVxcelerate Sensor from previous successful cycles, but be cautious when using those results. To resolve this issue, restart the AVxcelerate Sensor service or fix the connection problem, then rerun the simulation completely to ensure complete and valid results.

     ```bash
     [INFO ][Lifycycle] Starting simulation.
     [DEBUG][Lifecycle] Activity groundtruth_generator_activity is used as primary activity for simulation...
     [WARN ][AvxSensorActivity: avx_sensor_camera_activity] Initializing AVxcelerate Sensor simulation.
     [INFO ][AVxcelerate Sensor Connection] Waiting for connection to AVxcelerate Sensor Simulation Service at localhost:54321, Time out in 60 seconds
     [INFO ][AVxcelerate Sensor Connection] Connection to AVxcelerate Sensor Simulation Service at localhost:54321 established
     [INFO ][AVxcelerate Sensor Connection] Initialize request successful
     [INFO ][AVxcelerate Sensor Connection] Update request successful
     [INFO ][AVxcelerate Sensor Connection] Update request successful
     [INFO ][AVxcelerate Sensor Connection] Update request successful
     [INFO ][AVxcelerate Sensor Connection] Update request successful
     [INFO ][AVxcelerate Sensor Connection] Update request successful
     [ERROR][AVxcelerate Sensor Connection] gRPC error: Socket closed
     [ERROR][AvxSensorActivity: avx_sensor_camera_activity] Failed to call Update AVxcelerate Sensor server.
     [WARN ][Lifecycle] Activity avx_sensor_camera_activity called shutdown. Simulation will end soon!
     [INFO ][Lifycycle] Simulation ended.
     [WARN ][AvxSensorActivity: avx_sensor_camera_activity] Simulation ended, trying to unload AVxcelerate Sensor server...
     [INFO ][AVxcelerate Sensor Connection] Waiting for connection to AVxcelerate Sensor Simulation Service at localhost:54321, Time out in 60 seconds
     [ERROR][AVxcelerate Sensor Connection] Timeout waiting for gRPC channel connection localhost:54321 after 60 seconds
     [ERROR][AvxSensorActivity: avx_sensor_camera_activity] Failed to call Unload AVxcelerate Sensor server.
     ```

3. **Configuration file errors**
   - Ensure all required fields are present in the configuration. Example error of missing `AvxSensorParameter`:

     ```bash
     Executing original terminate handler...terminate called after throwing an instance of 'std::runtime_error'
     what():  [AvxConfigParser] Missing or null required field: AvxSensorParameter
     ```

   - Verify file paths exist and are accessible. Example error of missing `*.sencfgx` file:

     ```bash
     Executing original terminate handler...terminate called after throwing an instance of 'std::runtime_error'
     what():  [AvxConfigParser] File does not exist for AvxSensorConfig: /non-existing/co_sim/avx_sensor_configuration/test_configs/dummy_sensor_config.sencfgx
     ```

   - Check JSON syntax validity. Example error in wrong json syntax:

     ```bash
     Executing original terminate handler...terminate called after throwing an instance of 'std::runtime_error'
     what():  [AvxConfigParser] JSON parsing error in file co_sim/avx_sensor_configuration/test_configs/valid_config.json: [json.exception.parse_error.101] parse error at line 12, column 3: syntax error while parsing value - unexpected ']'; expected '[', '{', or a literal
     ```

4. **Track or object mapping issues**
   - Confirm `OpenScenario` object names match exactly. Example error when wrong object name is given:

   ```bash
   [INFO ][Vss Configuration] AVxcelerate Vehicle Identity: EgoWithWrongName will be used for above open scenario vehicle. 
   ...
   [ERROR][AVxcelerate Sensor Connection] Failed to call Load in AVxcelerate Sensor Simulation Service: Error on executing LoadCommand: Undefined identifier for egoVehicleIdentity
       std::runtime_error 
    what(): Failed to load AVxcelerate Sensor
   ```

   - Verify AVxcelerate asset and track files exist and are valid, accessible by AVxcelerate Sensor. Example error when track file is not accessible to AVxcelerate Sensor:

   ```bash
   [INFO ][Vss Configuration] Set track file: /tmp/track/non-existing.track
   ...
   [INFO ][AVxcelerate Sensor Connection] Connection to AVxcelerate Sensor Simulation Service at localhost:54321 established
   [ERROR][AVxcelerate Sensor Connection] Failed to call Load in AVxcelerate Sensor Simulation Service: Error on executing LoadCommand: Unpacking failed with error : The resource file cannot be found: /tmp/track/non-existing.track
       std::runtime_error 
    what(): Failed to load AVxcelerate Sensor
   ```

## Performance considerations

- **Cycle Time**: The AVxcelerate Sensor activity inherits its cycle time from its dependencies. Consider the computational requirements of your sensor model when setting cycle times.
- **Network Latency**: gRPC communication adds latency. For real-time simulations, ensure low network latency between the simulation framework and AVxcelerate Sensor service.
- **Resource Usage**: AVxcelerate Sensor processing can be computationally intensive. Monitor system resources during simulation.

## Limitation

The current implementation of AVxcelerate Sensor co-simulation has the following limitations:

1. **OSI to VSS Conversion**: When `use_vss_osi_api` is set to `false`, the current converter only supports moving objects from OSI SensorView to VSS WorldUpdate. Static objects and pedestrians are not yet supported. This limitation does not apply when `use_vss_osi_api` is set to `true`, as the VSS OSI API (available in AVxcelerate Sensor v261+) supports native OSI `osi3::SensorView` format, eliminating the need for conversion from Simulation Framework. Please refer to AVx Sensors documentation for details on how AVx Sensors convert OSI objects, weather conditions, and other simulation data into the AVx Sensors world representation.

2. **VSS API Compatibility**: The implementation is based on the current VSS API (v261). Future VSS API changes may require updates to the converter and adapter components.

3. **Error Recovery**: Limited error recovery mechanisms. If the AVxcelerate Sensor service becomes unavailable, the simulation may need to be restarted.

4. **Configuration Validation**: File existence validation is limited to sensor configuration files. Track and asset file existence is not validated by Simfwk.
