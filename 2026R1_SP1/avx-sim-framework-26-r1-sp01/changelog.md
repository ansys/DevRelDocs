# Release Note 2026R1-SP1

# 1. Framework (Core Simulation Backbone)

## 1.1 Runtime
n/a

## 1.2 Fixes
n/a

## 1.3 Improvements
n/a

# 2. Activities

## 2.1 GTGen Simulator Activity `groundtruth_generator_activity`

**Updated GtGen Simulator**: Version upgraded from v21.5.0 to v22.1.0

### New Features
**Traffic Light Exclusion from Ground Truth**: Traffic light objects are now excluded from OSI ground truth output by default
- **`proj_frame_offset` Populated in OSI GroundTruth**: The `GroundTruth::proj_frame_offset` field is now populated from the map's coordinate reference system, enabling georeferenced coordinate transformations in downstream consumers
- **`FollowingMode` Support in Traffic Actions**: OpenSCENARIO `FollowingMode` is now parsed and propagated to OSI traffic action representations
- **Configurable `IncludeTrafficLights` Map Parameter**: Whether traffic light objects are imported during map conversion can now be controlled via the `include_traffic_lights` setting
- **Elastic/Plastic Collision Dynamics**: New selectable collision response models (elastic and plastic/inelastic) allow per-entity collision behavior to be configured independently
- **Initial Acceleration for Entities**: OpenSCENARIO `Init` actions can now specify a starting longitudinal acceleration for entities
- **`GeoPosition` Height Attribute Support**: The `height` attribute from OpenSCENARIO `GeoPosition` elements is now read and applied
- **Uniform Integer Distribution in Stochastic Parameters**: OpenSCENARIO stochastic distributions now support `UniformIntDistribution`
- **MUTCD Traffic Sign Support**: US MUTCD traffic signs are now parsed and mapped in addition to German StVO signs
- **OpenDRIVE Source Reference for Traffic Lights**: Traffic light objects now carry an OpenDRIVE source reference in OSI output


### Improvements
- **Multi-LaneSection `TrafficAreaAction` Support**: Roads with multiple `<laneSection>` elements are now fully covered when computing traffic area targets
- **Road Markings Exposed as OSI Objects**: OpenDRIVE road markings are now correctly converted and reported as OSI road marking objects
- **`driving` Lane Subtype Mapping**: Lanes with `driving` subtype are now correctly mapped to `kNormal`, consistent with the `normal` subtype


### Fixes
- **Controller Route Selection**: Fixed incorrect route selection that caused controllers to take suboptimal paths
- **Controller Synchronisation on Mid-Simulation Activation**: Activating a controller after simulation start now correctly synchronises entity state
- **Host Entity ID Assignment**: The `host_id` field is now correctly assigned in multi-entity scenarios
- **Spawned Entity Orientation**: Newly spawned entities now have the correct initial orientation aligned with road geometry
- **OSI Timestamp Conversion**: Incorrect nanosecond conversion in OSI timestamps resolved
- **Obstacle Spawning**: Fixed a constructor parameter error that caused entity spawning failures
- **`LanePosition` with Omitted `s` Attribute**: Scenarios using `LanePosition` without an explicit `s` attribute are now handled correctly
- **`ExternalObjectReference` Crash**: Null pointer dereference when resolving external entity references resolved
- **`TrafficSignalControllerAction` Crash**: Segmentation fault during traffic signal controller action processing resolved
- **Traffic Light Type IDs**: Incorrect type identifier assignment for traffic lights in map parsing corrected
- **Lane ID Range Validation**: Out-of-range lane IDs in OpenDRIVE maps now produce a proper error instead of undefined behavior
- **3D Polyline Decimation**: Decimation of 3D reference lines now produces geometrically correct results

## 2.2 Esmini Activity `esmini_activity`

**Updated Esmini**: Version upgraded from v2.56.2 to v2.60.0

### New Features
- **Speed-Only Control Mode**: Added `SPEED_ONLY_CONTROL` control mode enabling direct speed control of scenario objects via `ObjectSpeedInputMsg` messages published on `ObjectSpeedInputTopic`. Calls esmini's `SE_ReportObjectSpeed` API to set the longitudinal speed without full position or vehicle model control
- **GroundTruth Cropping** (`crop_gt_radius`): Added configurable radius-based cropping of the published `osi3::GroundTruth`. Objects (moving objects, stationary objects, traffic signs, traffic lights, road markings), lanes, and lane boundaries beyond the specified radius from the host vehicle are removed before publishing. A value of `0.0` (default) disables cropping. Smart lane preservation ensures the host vehicle's current lanes and their adjacent neighbours are always retained regardless of radius.
- **`AngleCondition` Support** (OpenSCENARIO): Evaluate heading angle of an entity relative to a coordinate system; `lane` type aligns with driving direction; `trajectory` type supports `heading` attribute
- **OpenDRIVE Lane Height**: Elevated lane surfaces (e.g. raised sidewalks) are now parsed and applied to road geometry
- **Global OSI IDs**: All OSI elements (Lane, StationaryObject, MovingObject, TrafficLight, TrafficSign) now use globally unique IDs; internal scenario ID tracked via OSI source reference
- **OSI Source Reference**: Implemented for Lane, StationaryObject, MovingObject, TrafficLight and TrafficSign — enables traceability from OSI output back to scenario objects
- **Stationary MiscObjects on OSI GroundTruth**: Objects added via `AddEntity`/`AddObject` are now reported in OSI output
- **2D Shape Outline on OSI**: Vehicle, pedestrian and misc object outlines included in GroundTruth as OSI properties
- **`SE_GetRoadInfoAlongRoute()`**: New API for lookahead information that follows the entity's planned route, not just the current road segment

### Improvements

- **`host_vehicle_id` Populated in OSI GroundTruth**: `GroundTruth::host_vehicle_id` is now set by esmini to the entity whose `<Private>` action block appears **first** in the OpenSCENARIO `<Init>` block. This may differ from the declaration order in `<Entities>`. Ensure the intended ego/host vehicle has its `<Private>` action listed first in `<Init>`. 
- **OSI Version Propagated to SensorView**: `osi_version` is now copied from GroundTruth into SensorView
- **OpenDRIVE Session Isolation**: Previous road data is always cleared between `SE_Init` calls — prevents state bleed across back-to-back scenarios
- **Repeated `SE_Init` Without `SE_Close`**: Now accepted without error; previous session is cleaned up automatically
- **Lane Width Calculation with Non-Contiguous Lane IDs**: Accumulated width no longer fails on gaps in lane ID sequences (e.g. `-4, -3, -1, 0`)
- **Entity Pitch from Road Superelevation**: Entity pitch is now affected by lateral distance from road centre for non-constant banking
- **Trajectory Z-Alignment**: Relative Z values in trajectory waypoints are accepted; omitted Z still snaps entity to road surface
- **Trailer Alignment**: Trailers are correctly aligned on `AddEntity` action and can follow any Z value for airborne trajectories
- **`EnvironmentAction` `dateTime` Parsing**: Handles leading zeros, all timezone offset formats, and missing milliseconds

### Fixes

- **Trajectory Time Offset Not Applied to End-of-Action** (#773): Time offset is now included when computing action end time
- **`RelativeWorldPosition` Heading Offset**: Fixed erroneous heading contribution to relative world position
- **`esminiRMLib` Segfault on Missing Road ID** (#774): Null pointer checks added for road lookups
- **Negative Roadmark `sOffset` Freeze** (#766): Negative values truncated to zero — prevents scenario freeze on malformed map data
- **Missing Global Actions in Scenario Execution**: Indentation bug causing global actions to be skipped intermittently is fixed
- **`SPEED_ONLY_CONTROL` Mode Broken by Global OSI IDs**: The introduction of globally unique OSI IDs in v2.60.0 caused `esmini_activity` to fail when resolving the host vehicle — the adapter was assuming the ego always had OSI ID `0`. Fixed by reading `GroundTruth::host_vehicle_id` directly, which esmini now populates. Integration test `speed_only_control_integration_test` updated accordingly.
- **`ApplyTrafficUpdate` Broken by Global OSI IDs**: `TrafficUpdate` entries carry global OSI object IDs since esmini v2.60.0, but `SE_GetObjectState` and related esmini C API calls require a 0-based scenario entity index. The adapter now translates global OSI IDs to scenario indices using the mapping built during `GetSensorView()`. Passing an unknown ID throws `std::runtime_error`.
- **`ApplyVehicleControlInput` Broken by Global OSI IDs**: Same root cause as `ApplyTrafficUpdate` — `VehicleControlInputMsg::object_id` is a global OSI ID since v2.60.0. All esmini C API calls (`SE_GetObjectState`, `SE_ReportObjectPosXYH`, `SE_ReportObjectWheelStatus`, `SE_ReportObjectSpeed`) now translate the OSI ID to a scenario index via the mapping built in `GetSensorView()`. Passing an unknown ID throws `std::runtime_error`.
- **GroundTruth Crop Test Assumed Ego OSI ID is Zero**: The `GivenCropGtEnabled_WhenStepped_ThenDistantObjectsAndLanesRemoved` test was asserting `moving_object(0).id() == 0`. With globally unique OSI IDs the ego no longer has ID `0`. The assertion is now `moving_object(0).id() == host_vehicle_id()`, which is stable across esmini versions.
- **Esmini Log File Disabled, Console Logging Enabled**: This prevents esmini from writing a `log.txt` file to disk and redirects its internal log output to the console.


## 2.3 Ideal Sensors and Fusion Activities 
**Ideal Sensor/Fusion**: Reference activities for FoV-based sensing and simple by-object-id fusion.

### New Features
- **Ideal sensor activity**: `generic_sensor_activity` configured as `"camera"` or `"radar"` via `sensor_parameters` (activity `name` is arbitrary). The activity performs FoV filtering in sensor frame plus lane/lane-boundary interpolation, and then runs post-processing.
- **FoV-based interpolation behavior**: automatically interpolates/resamples lane geometry for sparse polylines and clips interpolation to in-FoV portions of polyline segments to avoid unnecessary point generation for mostly-out-of-FoV segments.
- **Post-processing steps**:
  - `merge_host_lane_context_by_junction_depth`: merges lane context across junctions to keep the host-related topology consistent.
  - `sort_lane_boundaries_in_order`: sorts lane boundaries left-to-right relative to the host lane using lane-boundary topology grouping.
- **Ideal fusion activity**: `osi_sensor_data_fusion_activity` with `fusion_logic: "by_object_id"`. Fusion merges the latest `SensorData` inputs, de-duplicates objects by ground truth ID, and transforms fused geometry into the **Host frame**. If input timestamps are misaligned, the fusion activity emits warnings.
- **White-box packaging + examples**: the FoV/sensor/fusion implementation and example sensor configs are exposed for inspection by users (not just black-box behavior).


# 3. Cross-Cutting Changes

n/a


# 4. Breaking Changes

- **Vehicle Control Input Message Renamed**: The vehicle Control input message has been renamed from `VehicleControlInput` to `VehicleControlInputMsg`. Any code using the previous message name from 2026R1 or earlier will fail to compile and must be updated to use the new message name.

- **`ObjectSpeedInputMsg.object_id` Must Use Global OSI ID**: Due to esmini v2.60.0 introducing globally unique OSI IDs, the `object_id` field in `ObjectSpeedInputMsg` must now be set to the global OSI ID of the target object, **not** a scenario-index-based ID (e.g. `0` for ego). Obtain the correct ID from `GroundTruth::host_vehicle_id` (for the ego) or from `GroundTruth::moving_object[i].id()` for other entities.

- **`Apply*` Methods Require Global OSI IDs and a Prior `GetSensorView()` Call**: Due to esmini v2.60.0 introducing globally unique OSI IDs, all apply methods now require object IDs to be global OSI IDs (not scenario indices), and `GetSensorView()` must be called first to build the mapping. Passing an unknown ID throws `std::runtime_error`.
  - `ObjectSpeedInputMsg::object_id` — use `GroundTruth::host_vehicle_id` (ego) or `GroundTruth::moving_object[i].id()`
  - `VehicleControlInputMsg::object_id` — use `SensorView::host_vehicle_id()` returned by `GetSensorView()`
  - `osi3::TrafficUpdate` entry `id()` — use `GroundTruth::moving_object[i].id()`

# 5. API Changes

## 5.1 Added

### ObjectSpeedInputMsg

```cpp
// autonomy/communication/messages/object_speed_input_msg/object_speed_input_msg.h
class ObjectSpeedInputMsg : public AutonomyMsg {
  uint64_t object_id;  // Global OSI ID of the controlled object (read from GroundTruth)
  double speed;        // Desired speed in m/s (must be >= 0)
};
```

- Impact: Enables direct speed control of esmini scenario objects via `SPEED_ONLY_CONTROL` mode
- Action Required: Optional - use with `ObjectSpeedInputTopic` when only longitudinal speed control is needed. Set `object_id` to the value obtained from `GroundTruth::host_vehicle_id` (ego) or `GroundTruth::moving_object[i].id()` — **not** a hardcoded scenario index.

---

## 5.2 Modified


### VehicleControlInputMsg (Renamed from `VehicleControlInput`)

```cpp
// autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h
class VehicleControlInputMsg : public AutonomyMsg {
    // No fields has been changed in the new message
};
```

- Impact: The message previously named `VehicleControlInput` has been renamed to `VehicleControlInputMsg`. Any code using the old name or structure will fail to compile and must be updated.
- Action Required: Update all references from `VehicleControlInput` to `VehicleControlInputMsg` as needed.


---

## 5.3 Deprecated

No APIs deprecated in this release.

---


# 6. Known Issues
n/a