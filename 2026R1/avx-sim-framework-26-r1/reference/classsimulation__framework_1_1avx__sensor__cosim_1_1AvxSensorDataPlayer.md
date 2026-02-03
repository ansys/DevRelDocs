# Class simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer

![][C++]
![][public]

**Definition**: `co_sim/avx_sensor/avx_sensor_data_player/avx_sensor_data_player.h` (line 61)

Streams and plays back SensorData protobuf messages from an MCAP file.

This class provides efficient, on-demand playback of sensor data messages stored in MCAP format. It uses streaming iteration to read messages sequentially without loading the entire file into memory, making it suitable for processing large trace files. The class is designed for offline simulation scenarios where sensor data needs to be replayed without requiring a live AVxcelerate Sensor connection.





The playback follows a two-phase pattern: first construct the player with a file path, then call [Open()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c) to initialize the file reader. Messages are retrieved sequentially using [GetNext()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a6ea95a471d69a2279b360c3e01dcd89c) until [HasNext()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1aaa9a3741cd47e239257d2b0ce7ad28e8) returns false. The [Reset()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a3acaed55e1f24f3e24de849a7018f882) method allows replaying from the beginning without reconstructing the object.





Messages are read from a configurable MCAP topic (default: "/avx/sensor_data"), which must match the topic name used during recording with [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder). All methods should be called from a single thread, or external synchronization must be provided if accessing the player from multiple threads.






?> The file must have been created by [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder) to ensure proper schema compatibility and topic name matching.


?> The topic name can be customized via the constructor parameter, but must match between recorder and player for successful playback.


```cpp
// Create player with default topic name "/avx/sensor_data" and open file
AvxSensorDataPlayer player("/path/to/output.mcap");
player.Open();

// Or specify a custom topic name (must match the recorder's topic)
AvxSensorDataPlayer custom_player("/path/to/output.mcap", "/custom/topic");
custom_player.Open();

// Stream messages sequentially
while (player.HasNext())
{
    auto message = player.GetNext();
    if (!message.has_value())
        break;
    // Process message: message->time_stamp(), message->camera_data(), etc.
}

// Optionally reset and replay
player.Reset();
while (player.HasNext())
{
    auto message = player.GetNext();
    // Process again...
}
```

## Members

* [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a8f4ba6fe9bd0d9e49171ebaa2674e78d)
* [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1ab91626705d34365251b015232675399d)
* [GetNext](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a6ea95a471d69a2279b360c3e01dcd89c)
* [HasNext](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1aaa9a3741cd47e239257d2b0ce7ad28e8)
* [Open](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c)
* [operator=](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a609d22ac506205bd8e9c43be74d9e88e)
* [Reset](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a3acaed55e1f24f3e24de849a7018f882)
* [~AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1ac5ea1c7a26c0ac9d38238af1540d4c54)

## Public functions

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a8f4ba6fe9bd0d9e49171ebaa2674e78d"></a>
### Function AvxSensorDataPlayer

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::AvxSensorDataPlayer(const std::string &file_path, const std::string &topic_name="/avx/sensor_data")
```


Constructs a player for the specified MCAP file.

**Parameters**:

* **file_path**: Path to the MCAP file to be played back. Must be a valid file path.
* **topic_name**: MCAP topic name to read messages from. Defaults to "/avx/sensor_data" if not specified. Must match the topic name used by [AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder) during recording.

The constructor does not open the file. Call [Open()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c) before attempting to read messages. The file path and topic name are stored and validated when [Open()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c) is called.



**Parameters**:

* const std::string & **file_path**
* const std::string & **topic_name** = "/avx/sensor_data" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::AvxSensorDataPlayer"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1ac5ea1c7a26c0ac9d38238af1540d4c54"></a>
### Function ~AvxSensorDataPlayer

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::~AvxSensorDataPlayer()
```


Destructor. Closes the MCAP file if it was opened.

Automatically releases all resources associated with the file reader. Safe to call even if [Open()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c) was never called or if the file was already closed.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::~AvxSensorDataPlayer"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1ab91626705d34365251b015232675399d"></a>
### Function AvxSensorDataPlayer

![][public]


```cpp
simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::AvxSensorDataPlayer(const AvxSensorDataPlayer &)=delete
```


Copy constructor is deleted. This class is non-copyable.





**Parameters**:

* const [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer) &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::AvxSensorDataPlayer"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a609d22ac506205bd8e9c43be74d9e88e"></a>
### Function operator=

![][public]


```cpp
AvxSensorDataPlayer & simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::operator=(const AvxSensorDataPlayer &)=delete
```


Copy assignment operator is deleted. This class is non-copyable.





**Parameters**:

* const [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer) &

**Return type**: [AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::operator="}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c"></a>
### Function Open

![][public]


```cpp
void simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::Open()
```


Opens the MCAP file and initializes the reader for streaming playback.

This method must be called before [GetNext()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a6ea95a471d69a2279b360c3e01dcd89c) can be used. It validates the file format, reads the MCAP header and metadata, and prepares the internal reader for sequential message access. If the file is already open, calling this method again will close and reopen it. 

**Exceptions**:

* **std::runtime_error**: if the file cannot be opened, does not exist, is not a valid MCAP file, or contains incompatible schema definitions.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::Open"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1aaa9a3741cd47e239257d2b0ce7ad28e8"></a>
### Function HasNext

![][public]
![][const]


```cpp
bool simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::HasNext() const
```


Checks if there are more messages available for playback.

**Returns**:

true if there is at least one more message available, false if all messages have been read.

This method may cache the next message internally for efficiency. It can be called multiple times without side effects. Returns false if the file has not been opened or if the end of the file has been reached. 
?> This method is logically const but may cache internal state for performance.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::HasNext"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a6ea95a471d69a2279b360c3e01dcd89c"></a>
### Function GetNext

![][public]


```cpp
std::optional< ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData > simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::GetNext()
```


Retrieves the next SensorData message from the MCAP file.

**Returns**:

An optional containing the next SensorData protobuf message if available, or std::nullopt if no more messages remain or if the file has not been opened.

This method advances the read position to the next message. Each call returns the next sequential message in the file. The returned message is a complete copy of the protobuf data, allowing safe modification without affecting the stored data. 
**pre**\
Call [HasNext()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1aaa9a3741cd47e239257d2b0ce7ad28e8) before calling this method to ensure a message is available.


?> Calling this method when [HasNext()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1aaa9a3741cd47e239257d2b0ce7ad28e8) returns false will return std::nullopt.


?> The method may throw std::runtime_error if the file becomes corrupted or unreadable during playback.



**Return type**: std::optional< ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::GetNext"}]}`
-->

<a id="classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a3acaed55e1f24f3e24de849a7018f882"></a>
### Function Reset

![][public]


```cpp
void simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::Reset()
```


Resets playback to the beginning of the file.

After calling this method, the next call to [GetNext()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a6ea95a471d69a2279b360c3e01dcd89c) will return the first message in the file. This allows replaying the entire file without reconstructing the player object. The file must have been opened via [Open()](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer_1a32069b4cba32dbd2b4f66df3b68e7d6c) before calling this method. 
?> This method does not close or reopen the file; it only resets the read position.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer::Reset"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"avx__sensor__data__player_8h"},"children":[{"type":"text","text":"avx_sensor_data_player.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)