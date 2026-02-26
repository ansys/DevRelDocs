# ChangeLog

## GtGen-Simulator  
>
> **Updated GtGen Simulator version from v17.0.0 to v21.2.0**  

### 🔄 API & Bazel Updates

- **Full Sensor View Access**  
  Exposed `GtGenEnvironment::GetFullSensorView` to SimulatorCore, allowing access to the complete (non-chunked) SensorView.

- **Build System Modernization**  
  Migrated all `gtgen-core` dependencies to **bazelmod**, improving dependency management and build consistency.

- **API Renaming for Map Interface**  
  Replaced the old *map API* identifier with a new **mantle API** identifier and renamed the namespace accordingly.

- **Expose Variable Access API**  
  Exposed `SetVariable` and `GetVariable` APIs from the simulator, allowing variables to be set and retrieved from external components.

---

### 🛠️ Simulation Enhancements

- **Inelastic Collision Dynamics**  
  Added support for inelastic collision behavior, enabling more realistic crash simulations.

- **Improved OSI GT Support**  
  You can now set **model references** for traffic signs and traffic lights, increasing accuracy for perception pipelines.

- **MCAP Output Support**  
  Simulation data can now be exported to the **MCAP** logging format for easier integration with modern tooling.

- **Traffic Light Parsing Control**  
  Added `include_traffic_lights` to the `Map` structure under User Settings, allowing traffic light parsing to be enabled/disabled as needed.

- **Extended Cyclic Outputs**  
  Cyclics now includes **ODR LaneID** and **brake light state**, improving downstream data processing.

- **Configurable Foxglove Endpoint**  
  The WebSocketServer endpoint for Foxglove is now configurable for more flexible visualization setup.

- **Guardrail Inclusion Setting**  
  Added user setting to include or exclude guardrails as stationary objects.

---

### 🚦 Traffic Actions

- **Relative Lane Position (“ds”)**  
  Added support for `ds` to describe relative longitudinal movement within a lane.

- **TrafficAreaAction (Limited)**  
  Introduced initial support for `TrafficAreaAction`, enabling basic area-based traffic behavior.

- **Variable Conditions and SetVariableAction**  
  Added support for variable-based conditions and SetVariableAction from scenario.

- **TrafficSignalCondition**  
  Added support for TrafficSignalCondition from scenario.

---

### 🛣️ Map Features

- **Direct Junction Parsing**  
  Added support for parsing direct junctions in map conversion.

- **3D Lane/Road Orientation**  
  Added support for retrieving 3D orientation of lanes and roads.

- **Traffic Light Conversion**  
  Added support for traffic light conversion in map processing.

### 🐞 Bug Fixes

- **TeleportAction Orientation Handling**  
  If Orientation is missing, it now defaults to relative context with `Heading = Pitch = Roll = 0`.

- **Collision Check Improvements**
  - Road markings are no longer considered in collision checks.  
  - Guardrails are removed from direct collision checks; instead, collisions are checked with actual stationary objects.
  - Entities are now allowed to leave their lane after a collision, preventing unrealistic lane constraints.

- **LaneOffset Handling Fix**
  Fixed conversion from LanePosition to WorldPosition when the map contains laneOffset.

- **Geometry Heading Angle in Map Conversion**  
  Fixed incorrect heading angles for road and lane geometries (arc and paramPoly3) during map conversion.

---

## Simulation Framework
>
> Compatibility Notice: Please note that all standalone activity executables built with previous versions of simfwk must be recompiled using the current simfwk library to ensure proper compatibility with the latest `simfwk_cli`. Failing to do so may result in simulations not running, unexpected behavior, or incorrect connectivity.

### 🔧 AVx Co-simulation

- Updated the supported AVx Sensors version to `v261` which allows OSI3 to be used in VSS simulation API.
- Added one option in simulation config to configure co-sim to use OSI3 Simulation API.
- Added an API to access **VSS SensorData** from shared memory via a configurable Topic. This enables more flexible co-simulation setup for closed-loop simulation.
- Added gRPC transport mode configuration to sync with AVx Sensors usage.
- Added recording option for vss SensorData into mcap and utilties for trace playback.

---

### 📊 Lichtblick Visualization

- **More Topic Support**  
  Visualization config has been refactored to support a broader set of Topics.

- **New Timestamp Topic**  
  Added `/sim/simulation_time` to make the `Plot` plug-in easier to use and synchronize.

---

### 🤖 Autonomy

- **Esmini Ground Truth Generator added**  
  - [Environment Simulator Minimalistic (Esmini)](https://github.com/Esmini/Esmini) is added as another built-in GT data generator.
  - Esmini simple vehicle model mode is now supported and the external controllers can directly control entities within the simulator with acceleration and steering commands.

- **New Built-in Bicycle Vehicle Model Activity**  
  - Introduced a ready-to-use bicycle dynamics model for lightweight testing and scenario prototyping.
  - This activity accepts osi3::MotionRequest and produces osi3::TrafficUpdate.
  - Known Limitations:
    - Internal Vehicle Controller might cause vehicle to halt on tight turns or circular trajectories.
    - osi3::MotionRequest.desired_trajectory.trajectory_point.orientation.pitch is repurposed and mapped to velocity request from planner & osi3::MotionRequest.desired_trajectory.trajectory_point.orientation.roll is repurposed and mapped to acceleration request from planner. Please refer Simulation Framework examples `examples/autonomy/vehicle_model_activity/planning/dummy_planner_activity.cpp` for reference.

- **Default KPIs for Euro NCAP**  
  Added built-in KPIs for NCAP test:
  - Collision detection: Entity that collides with host is recorded in KPI results.
  - Speed reduction tracking: Speed reduction statistics of the host vehicle are recorded just before it collides with an object and when collision KPI is recorded.

- **New OSI-DDS utilities**  
  - Introduced new utility functions in `autonomy/communication/utils/osi_to_dds_converter.h` to ease the conversion bewteen OSI msg and RTIDDS bytes msg.

- **Configurable ScenarioVariableTopic Topic in GtGen & Esmini**  
  - Introduced one configurable Topic `ScenarioVariableTopic` which allows you to have an additional subscriber for build-in gtgen, standalone gtgen activity, Esmini activity to update the scenario variables in runtime.
  - Limitation: Please note Esmini doesn't support manipulation of unsigned type variables in scenario.

---

### 🧩 Framework

- **Automatic Activity Detection**  
  Standalone Activities are now detected automatically during simulation startup.

- **Finalize() API**  
  Added `Finalize()` for Activities to perform custom cleanup or final steps before simulation exit.

- **Generic Variant Topic**  
  1. Added dedicated `VariantMapTopicType` for supporting any customized topic type as Variant data structure and some utility functions.
  2. Added alias `VariantData` for `FmuData`. This provides a semantic "Variant" naming today while retaining full compatibility with FMU message structure.

- **Debug Mode Update**  
  The framework can now pause execution when Breakpoints are triggered, improving debugging efficiency.

- **New KPI format**  
  Added a new KPI type `kJson`so that KPI values can be logged directly in json content.

---

### 🐞 Bug Fixes

- Improve installation script to avoid possible unaccessible `anslic_client` by copying.
