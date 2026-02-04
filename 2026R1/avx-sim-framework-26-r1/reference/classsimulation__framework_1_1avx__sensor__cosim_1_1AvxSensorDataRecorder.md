# Class simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder

![][C++]
![][public]

**Definition**: `co_sim/avx_sensor/avx_sensor_data_recorder/avx_sensor_data_recorder.h` (line 56)

Records SensorData protobuf messages to an MCAP file for later playback.

This class provides efficient serialization and storage of sensor data messages in MCAP format. Each call to [Record()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1acc542a0f0a1e24dac041f097dff7e401) appends a new message to the file, allowing incremental recording of sensor data streams. The MCAP file format ensures efficient storage, schema validation, and compatibility with standard MCAP playback tools.





The file is created and initialized during construction, with the schema and channel metadata automatically configured for SensorData messages. Messages are recorded to a configurable MCAP topic (default: "/avx/sensor_data"). The topic name must match the topic name used during playback with [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer). The file remains open for writing until the recorder is destroyed, at which point it is properly closed and finalized.





All methods should be called from a single thread, or external synchronization must be provided if calling [Record()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1acc542a0f0a1e24dac041f097dff7e401) from multiple threads to ensure thread-safe operation.






?> Files created by this recorder are compatible with [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer) for playback.


?> The topic name can be customized via the constructor parameter, but must match between recorder and player for successful playback.


```cpp
// Prepare sensor data
ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData data;
data.mutable_time_stamp()->set_seconds(1);
data.mutable_time_stamp()->set_nanos(0);
// ... populate other sensor data fields ...

// Create recorder with default topic name "/avx/sensor_data"
AvxSensorDataRecorder recorder("/path/to/output.mcap");
recorder.Record(data);

// Or specify a custom topic name
AvxSensorDataRecorder custom_recorder("/path/to/output.mcap", "/custom/topic");
custom_recorder.Record(data);

// Append additional messages as needed
ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData next_data;
// ... populate next_data ...
recorder.Record(next_data);

// File is automatically closed and finalized when recorder goes out of scope
```

## Members

* [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1a2448dd9694c90ded71c3da1adb8e196f)
* [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1a79290b6408f04b490c990293bce6e1e0)
* [operator=](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1a15d8c8066c59964d0b267c2ae8112391)
* [Record](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1acc542a0f0a1e24dac041f097dff7e401)
* [~AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1aa89ac4e8a7fec843546c1cbc01962fd6)

## Public functions

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1a2448dd9694c90ded71c3da1adb8e196f"></a>
### Function AvxSensorDataRecorder

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::AvxSensorDataRecorder(const std::string &file_path, const std::string &topic_name="/avx/sensor_data")
```


Constructs a recorder and creates the MCAP file for writing.

**Parameters**:

* **file_path**: Path where the MCAP file will be written. Must be a valid file path. Parent directories are automatically created if they do not exist.
* **topic_name**: MCAP topic name for the recorded messages. Defaults to "/avx/sensor_data" if not specified. Must match the topic name used by [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer) during playback.

During construction, the MCAP file is created, the file header is written, and the schema and channel metadata for SensorData messages are registered. If a file already exists at the specified path, it will be overwritten. 

**Exceptions**:

* **std::runtime_error**: if the file cannot be created, the parent directory cannot be created, or if there is insufficient disk space or permissions to write to the specified location.



**Parameters**:

* const std::string & **file_path**
* const std::string & **topic_name** = "/avx/sensor_data" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::AvxSensorDataRecorder"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1aa89ac4e8a7fec843546c1cbc01962fd6"></a>
### Function ~AvxSensorDataRecorder

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::~AvxSensorDataRecorder()
```


Destructor. Finalizes and closes the MCAP file.

Automatically flushes any buffered data, writes the MCAP file footer and index, and closes the file. Safe to call even if no messages were recorded.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::~AvxSensorDataRecorder"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1a79290b6408f04b490c990293bce6e1e0"></a>
### Function AvxSensorDataRecorder

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::AvxSensorDataRecorder(const AvxSensorDataRecorder &)=delete
```


Copy constructor is deleted. This class is non-copyable.





**Parameters**:

* const [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder) &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::AvxSensorDataRecorder"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1a15d8c8066c59964d0b267c2ae8112391"></a>
### Function operator=

![][public]


```cpp
AvxSensorDataRecorder & simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::operator=(const AvxSensorDataRecorder &)=delete
```


Copy assignment operator is deleted. This class is non-copyable.





**Parameters**:

* const [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder) &

**Return type**: [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::operator="}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1acc542a0f0a1e24dac041f097dff7e401"></a>
### Function Record

![][public]


```cpp
void simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::Record(const ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData &sensor_data)
```


Appends a SensorData message to the MCAP file.

**Parameters**:

* **sensor_data**: The SensorData protobuf message to record. The message is serialized and appended to the file with its associated timestamp and metadata.

Each call to [Record()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder_1acc542a0f0a1e24dac041f097dff7e401) writes a complete message to the file. Messages are written sequentially and can be read back in the same order during playback. The method performs serialization and compression as configured for the MCAP file. 

**Exceptions**:

* **std::runtime_error**: if writing to the file fails, the file system becomes full, or if the file handle becomes invalid (e.g., due to disk errors).



**Parameters**:

* const ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData & **sensor_data**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder::Record"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"avx__sensor__data__recorder_8h"},"children":[{"type":"text","text":"avx_sensor_data_recorder.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)