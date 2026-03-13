# 2026 R1 Changelog

## Framework (Core Simulation Backbone)

### Runtime

- **Automatic Activity Detection**: Standalone Activities are now detected automatically during simulation startup
- **Finalize() API**: Added `Finalize()` lifecycle method for Activities to perform custom cleanup or final steps before simulation exit
- **Debug Mode Enhancement**: Framework can now pause execution when Breakpoints are triggered, improving debugging efficiency
- **Generic Variant Topic**: Added dedicated `VariantMapTopicType` for supporting any customized topic type as `Variant` data structure with utility functions
- **VariantData Alias**: Added alias `VariantData` for `FmuData`, providing semantic `Variant` naming while retaining full compatibility with FMU message structure

### Fixes

- Improved installation script to avoid possible inaccessible `anslic_client` by copying

---

## Activities

### GTGen Simulator Activity `groundtruth_generator_activity`

**Updated GtGen Simulator**: Version upgraded from v17.0.0 to v21.2.0

### New Features

- **Inelastic Collision Dynamics**: Added support for inelastic collision behavior for realistic crash simulations
- **Traffic Actions**: Added support for relative lane position (`ds`), `TrafficAreaAction` (limited), `variable-based conditions`, `SetVariableAction`, and `TrafficSignalCondition`
- **Configurable `ScenarioVariableTopic`**: Introduced configurable Topic allowing additional subscriber for updating scenario variables at runtime
- Can **set `model_references`** traffic signs and traffic lights

### Improvements

- **Traffic Light Parsing Control**: Added `include_traffic_lights` to Map structure under User Settings
- **Extended Cyclic Outputs**: Cyclics now includes ODR `LaneID` and brake light state
- **Guardrail Inclusion Setting**: Added user setting to include or exclude guardrails as stationary objects

### Fixes

- **TeleportAction Orientation**: defaults to relative context with `Heading = Pitch = Roll = 0` if missing
- **Collision Checks**: Road markings no longer considered; guardrails removed from direct collision checks; entities allowed to leave lane after collision
- **LaneOffset Handling**: Fixed conversion from `LanePosition` to `WorldPosition` when map contains `laneOffset`
- **Geometry Heading Angle**: Fixed incorrect heading angles for road and lane geometries (arc and paramPoly3) during map conversion

### Esmini Activity `esmini_activity`

**Esmini Integration**: Added Esmini (**v2.56.2**)  as an alternative built-in ground truth generator

### New Features

- **Full TrafficUpdate Control Mode**: Enables control via `osi3::TrafficUpdate` messages (default mode)
- **Simple Vehicle Model Support**: External controllers can directly control entities using acceleration and steering commands in Esmini's simple vehicle model mode
- **Configurable ScenarioVariableTopic**: Allows runtime scenario variable updates (same as GtGen)
- **Known Limitation**: Esmini doesn't support manipulation of unsigned type variables in scenarios

### Vehicle Model Activity `vehicle_activity`

### New Features

- **Built-in Bicycle Dynamics Model**: Ready-to-use bicycle dynamics model for lightweight testing
- Accepts `osi3::MotionRequest` and produces `osi3::TrafficUpdate`
- **Known Limitations**:
  - Internal Vehicle Controller might cause vehicle to halt on tight turns or circular trajectories
  - `osi3::MotionRequest.desired_trajectory.trajectory_point.orientation.pitch` is repurposed and mapped to velocity request from planner
  - `osi3::MotionRequest.desired_trajectory.trajectory_point.orientation.roll` is repurposed and mapped to acceleration request from planner
- New **Vehicle Control Messages**: `VehicleControlInputMsg` supporting multiple control paradigms (`ACC_N_STEER`, `ANALOG`, `BINARY` modes)

### AVxcelerate Sensor Co-simulation

Updated AVx Sensors Version to **v261**

### New Features

- **OSI3 Simulation API**: Added option in simulation config to configure co-sim to use OSI3 Simulation API
- **VSS SensorData Access**: Added API to access VSS SensorData from shared memory via configurable Topic
- **MCAP Recording & Playback**: Added `AvxSensorDataRecorder` for recording sensor data to MCAP files and `AvxSensorDataPlayer` for playback

### Improvements

- **gRPC Transport Mode**: Added TransportMode options (`kInsecure`, `kMTransportLayerSecurity`, `kUnixDomainSocke`) with configurable UDS socket ID and custom path
- **Enhanced API Adapter**: Unix Domain Socket support, configurable transport modes, better timeout handling

### NCAP KPI Evaluation `collision_kpi`

### New Features

- **Collision Detection**: Bounding box-based collision detection for host vehicle with per-collision statistics (`v_impact`, `v_rel_impact`, `impact_location`)
- **Impact Speed Reduction**: Calculator tracking deceleration events with speed reduction statistics and JSON output
- **Default KPIs for Euro NCAP**: Built-in KPIs for collision detection and speed reduction tracking
- **New Data Type**: Added `Datatype::kJson` for storing complex structured data as JSON in KPI messages

---

## Cross-Cutting Changes

### Autonomy Communication Framework

- **New Message System**: Base class `AutonomyMsg` with custom serialization, providing efficient fixed-size serialization without protobuf overhead
- **Topic Registry**: Autonomy-specific topic registry documenting mapping of topic IDs to Topic types
- **Converters**: DDS-to-Autonomy and OSI-to-DDS conversion utilities

### Lichtblick Visualization

- **More Topic Support**: Visualization config refactored to support broader set of Topics
- **New Timestamp Topic**: Added `/sim/simulation_time` for easier plot plug-in usage and synchronization

### Logging Improvements

- **Timestamps**: All log messages now include timestamps (`YYYY-MM-DD HH:MM:SS.mmm`)
- **Color Coding**: TTY detection for colored output (Debug: `Cyan`, Info: `Green`, Warning: `Yellow`, Error: `Red`)

### Debugger Enhancements

- **Breakpoint Support**: JSON-based breakpoint configuration with value change and conditional breakpoints
- **DataValue Extension**: Added `int8_t` support for complete integer type coverage
- **Configuration**: New `SimulationParameters::breakpoints_file_path` field

---

## Breaking Changes

### AvxSensorSetting Header Location Change

Description: `AvxSensorSetting` header file moved from `autonomy/simulation/` to `co_sim/avx_sensor/` directory.

Impact: Medium

Action Required: Yes

Migration:

- **Old**: `#include "autonomy/simulation/avx_sensor_setting/avx_sensor_setting.h"`
- **New**: `#include "co_sim/avx_sensor/avx_sensor_setting/avx_sensor_setting.h"`
- Update include paths in all files using `AvxSensorSetting`

---

### `IWorldSimulator` Interface Removed

Description: `autonomy/world_simulator/i_world_simulator/i_world_simulator.h` has been deleted. Interface refactored or deprecated.

Impact: Medium

Action Required: Yes

Migration:

- Check if your code uses `IWorldSimulator` interface
- Migrate to concrete world simulator injection

Removal Version: N/A (immediate removal)

---

### Standalone Activity Recompilation Required

Description: All standalone activity executables built with previous versions of simfwk must be recompiled using current simfwk library.

Impact: **High**

Action Required: Yes

Migration:

- Recompile all standalone activities with 26R1 simfwk library
- Failing to do so may result in simulations not running, unexpected behavior, or incorrect connectivity

Removal Version: N/A

---

## API Changes

### Activity Lifecycle

Description: Added `Finalize()` to IActivity

```cpp
class IActivity {
  virtual void Init() = 0;
  virtual void ExecuteStep() = 0;
  virtual void Finalize() = 0;  // NEW
  virtual void Shutdown() = 0;
};
```

- Impact: Additional finalization logic separated from shutdown
  - Default implementation in BaseActivity is empty (no-op)
  - Call order: Init() → Step() (loop) → Finalize() → Shutdown()
- Action Required: Optional - add only when needed

### AutonomyMsg Base Class

```cpp
// autonomy/communication/message/autonomy_msg.h
class AutonomyMsg {
  TimestampView timestamp;
  uint64_t sequence_id;
  virtual size_t ByteSizeLong() const = 0;
  virtual bool SerializeToArray(void* data, size_t size) const = 0;
};
```

- Impact: Enables efficient custom message serialization without protobuf overhead
- Action Required: Optional - use for custom messages when protobuf overhead is undesirable

---

### VehicleControlInputMsg

```cpp
// autonomy/communication/message/vehicle_control_input_msg.h
enum class VehicleControlMode { ACC_N_STEER, ANALOG, BINARY };
using ThrottleType = std::variant<int, double>;
using SteeringType = std::variant<int, double>;
```

- Impact: Supports multiple vehicle control paradigms
- Action Required: Optional - use when implementing vehicle control interfaces

---

### VariantMap System

```cpp
// core/communication/variant_map/variant_map.h
using VariantValue = std::variant<uint16_t, uint32_t, uint64_t, int32_t,
                                   int64_t, double, float, std::string,
                                   bool, std::vector<uint8_t>>;
class VariantMap : public std::map<std::string, VariantMapEntry> {};

// Converters
rtidds::VariantMap ConvertToDdsVariantMap(const VariantMap& native_map);
VariantMap ConvertToNativeVariantMap(const rtidds::VariantMap& dds_map);
```

- Impact: Enables flexible key-value data exchange
- Action Required: Optional - use for dynamic data structures

---

### Breakpoint System

```cpp
// core/debugger/breakpoint/breakpoint.h
struct Breakpoint {
  std::string name;
  ComparisonType comparison_type;
  std::function<bool()> condition_callback;
};

// breakpoint_parser.h
std::vector<Breakpoint> ReadBreakpointsFromFile(const std::string& file_path);
```

- Impact: Enables interactive debugging with conditional breakpoints
- Action Required: Optional - configure via `SimulationParameters::breakpoints_file_path`

---

### FMU Initialization Parameters

```cpp
// core/fmu/fmu_logic/i_fmu_logic.h
virtual void SetInitializationParams(const std::map<std::string, std::string>& params) = 0;

// FmuConfig
std::map<std::string, std::string> topics_to_init_params;
```

- Impact: Allows FMU parameters to be set from DDS topics before simulation starts
- Action Required: Optional - implement in custom FMU logic if needed

---

### GT-Gen Simulator Activity Variable API

```cpp
// GtGenSimulator
using VariableType = std::variant<bool, double, std::string, uint32_t, uint16_t, int32_t>;
void SetVariable(const std::string& name, const VariableType& value);
VariableType GetVariable(const std::string& name);
```

- Impact: Enables dynamic scenario parameter modification at runtime
- Action Required: Optional - use for runtime scenario control

---

### Utility Functions

```cpp
// core/utils/environment_utils.h
std::string GetEnv(const std::string& key);  // Renamed from GetEnvironmentVariable
void SetEnv(const std::string& key, const std::string& value);  // NEW
void UnsetEnv(const std::string& key);  // NEW
```

- Impact: Enhanced environment variable management
- Action Required: Yes - update calls from `GetEnvironmentVariable()` to `GetEnv()`

---

### OSI-DDS Conversion Utilities

```cpp
// autonomy/communication/utils/osi_to_dds_converter.h
template<typename T>
rtidds::GenericBytes CreateDdsMessageFromOsiProto();
// Supports: SensorView, SensorData, TrafficUpdate, MotionRequest
```

- Impact: Simplifies OSI protobuf to DDS conversion
- Action Required: Optional - use for OSI message handling

---

### Simulation Instance Query

```cpp
// core/simulation/simulation_instance.h
bool IsPauseRequested() const;
```

- Impact: Supports interactive debugging and pause/resume
- Action Required: Optional - use for custom pause handling

---

### Modified

### Topic Registry Namespace

Before:

```cpp
topic_registry::GetExistingTopicById(...)
```

After:

```cpp
autonomy::topic_registry::GetExistingTopicById(...)
```

- Impact: Clarified autonomy-specific topic registry
- Action Required: Yes - use fully qualified namespace in autonomy code
- Migration: Add `autonomy::` prefix to topic_registry calls

---

### Deprecated

No APIs deprecated in this release.

---

## Known Issues

- **Bicycle Vehicle Model Activity**: Internal Vehicle Controller might cause vehicle to halt on tight turns or circular trajectories
- **Bicycle Vehicle Model Activity**: `osi3::MotionRequest` orientation fields (pitch/roll) are repurposed for velocity/acceleration requests
- **Esmini Simulator**: Does not support manipulation of unsigned type variables in scenario
- **GtGen TrafficAreaAction**: Only limited/initial support available
