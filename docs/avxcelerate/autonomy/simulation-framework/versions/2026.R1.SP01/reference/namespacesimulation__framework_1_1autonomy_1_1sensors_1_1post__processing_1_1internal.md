# Namespace simulation_framework::autonomy::sensors::post_processing::internal

![][C++]

**Definition**: `autonomy/sensors/post_processing/internal/lane_context_utils.h` (line 23)





## Typedefs

<a id="lane__context__utils_8h_1a707084b0c741747496df9a405d81b86e"></a>
### Typedef LaneClassById

![][public]

**Definition**: `autonomy/sensors/post_processing/internal/lane_context_utils.h` (line 30)


```cpp
using simulation_framework::autonomy::sensors::post_processing::internal::LaneClassById = typedef std::unordered_map<uint64_t, const osi3::Lane::Classification*>
```




Lookup table from lane ground-truth ID to lane classification.





Values are non-owning pointers to classifications stored inside <code>osi3::SensorData</code>. The map is only valid while the referenced SensorData object remains alive.



**Return type**: std::unordered_map< [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) osi3::Lane::Classification * >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::LaneClassById"}]}`
-->

## Functions

<a id="lane__context__utils_8h_1a47c350e16c3edae8b7906d673140c411"></a>
### Function GetLaneClass

![][public]


```cpp
const osi3::Lane::Classification * simulation_framework::autonomy::sensors::post_processing::internal::GetLaneClass(const osi3::DetectedLane &lane)
```




Return first candidate lane classification from a detected lane.






**Parameters**:

* **lane**: Detected lane message.


**Returns**:

Pointer to first candidate classification, or <code>nullptr</code> if no candidate exists.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) osi3::DetectedLane & **lane**

**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) osi3::Lane::Classification *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::GetLaneClass"}]}`
-->

<a id="lane__context__utils_8h_1a61960184ceec7b84a56df82f692de32f"></a>
### Function GetFirstIdOrZero

![][public]


```cpp
uint64_t simulation_framework::autonomy::sensors::post_processing::internal::GetFirstIdOrZero(const google::protobuf::RepeatedPtrField< osi3::Identifier > &ids)
```




Return first identifier value, or zero if list is empty.






**Parameters**:

* **ids**: Repeated identifier field.


**Returns**:

First identifier value, or <code>0</code> when unavailable.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) google::protobuf::RepeatedPtrField< osi3::Identifier > & **ids**

**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::GetFirstIdOrZero"}]}`
-->

<a id="lane__context__utils_8h_1af503e4babfc55c940dd3dc9475f4f431"></a>
### Function GetBoundaryIdOfLane

![][public]


```cpp
uint64_t simulation_framework::autonomy::sensors::post_processing::internal::GetBoundaryIdOfLane(const osi3::Lane::Classification *lane_class, bool is_left)
```




Resolve left or right boundary ID from a lane classification.






**Parameters**:

* **lane_class**: Lane classification pointer.
* **is_left**: <code>true</code> for left boundary; <code>false</code> for right boundary.


**Returns**:

Boundary ID, or <code>0</code> if lane class is null or the requested boundary is missing.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) osi3::Lane::Classification * **lane_class**
* [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **is_left**

**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::GetBoundaryIdOfLane"}]}`
-->

<a id="lane__context__utils_8h_1a9fdd7b6c7834daf8cd2efbbd0c88007f"></a>
### Function GetAdjacentLaneId

![][public]


```cpp
uint64_t simulation_framework::autonomy::sensors::post_processing::internal::GetAdjacentLaneId(const LaneClassById &lane_class_by_id, uint64_t lane_id, bool is_left, bool ensure_driving)
```




Resolve adjacent lane ID from lane topology.






**Parameters**:

* **lane_class_by_id**: Lane lookup table.
* **lane_id**: Start lane ID.
* **is_left**: <code>true</code> for left adjacent lane, <code>false</code> for right adjacent lane.
* **ensure_driving**: If <code>true</code>, only return adjacent lane when it is driving type.


**Returns**:

Adjacent lane ID if available and valid for constraints; otherwise <code>0</code>.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [LaneClassById](namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing_1_1internal.md#lane__context__utils_8h_1a707084b0c741747496df9a405d81b86e) & **lane_class_by_id**
* [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **lane_id**
* [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **is_left**
* [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **ensure_driving**

**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::GetAdjacentLaneId"}]}`
-->

<a id="lane__context__utils_8h_1af97a6c6e219dc9c39c6542905876b2cd"></a>
### Function FindBorderLaneId

![][public]


```cpp
uint64_t simulation_framework::autonomy::sensors::post_processing::internal::FindBorderLaneId(const LaneClassById &lane_class_by_id, uint64_t central_lane_id, bool is_left)
```




Find nearest non-driving border lane by walking adjacent lanes on one side.





Starting from <code>central_lane_id</code>, this function follows left/right adjacency until it finds the first non-driving lane (treated as border lane) or cannot continue.






**Parameters**:

* **lane_class_by_id**: Lane lookup table.
* **central_lane_id**: Central lane ID used as traversal root.
* **is_left**: <code>true</code> to search on left side, <code>false</code> to search on right side.


**Returns**:

Border lane ID, or <code>0</code> if none is found.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [LaneClassById](namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing_1_1internal.md#lane__context__utils_8h_1a707084b0c741747496df9a405d81b86e) & **lane_class_by_id**
* [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **central_lane_id**
* [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **is_left**

**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::FindBorderLaneId"}]}`
-->

<a id="lane__context__utils_8h_1a7338d336e31b4032fd09ba2afa696fd2"></a>
### Function CollectSuccessorLaneIds

![][public]


```cpp
void simulation_framework::autonomy::sensors::post_processing::internal::CollectSuccessorLaneIds(const LaneClassById &lane_class_by_id, uint64_t lane_id, uint64_t depth, std::vector< uint64_t > *successor_ids, std::unordered_set< uint64_t > *visited)
```




Collect successor lane IDs up to the configured recursion depth.





This performs a depth-limited DFS over <code>lane_pairing.successor_lane_id</code> edges and appends newly discovered lanes to <code>successor_ids</code>. <code>visited</code> is used to avoid duplicates and cycles.






**Parameters**:

* **lane_class_by_id**: Lane lookup table.
* **lane_id**: Start lane ID for successor traversal.
* **depth**: Remaining traversal depth. Value <code>0</code> stops recursion.
* **successor_ids**: Output list of discovered successor lane IDs.
* **visited**: Set of already visited lane IDs; updated in-place.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [LaneClassById](namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing_1_1internal.md#lane__context__utils_8h_1a707084b0c741747496df9a405d81b86e) & **lane_class_by_id**
* [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **lane_id**
* [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **depth**
* std::vector< [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > * **successor_ids**
* std::unordered_set< [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > * **visited**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::CollectSuccessorLaneIds"}]}`
-->

<a id="lane__context__utils_8h_1a02b12f6b1785ee363d33f9c573f60c83"></a>
### Function BuildLaneClassByIdAndHostLaneIds

![][public]


```cpp
void simulation_framework::autonomy::sensors::post_processing::internal::BuildLaneClassByIdAndHostLaneIds(const osi3::SensorData &sensor_data, LaneClassById *lane_class_by_id, std::vector< uint64_t > *host_lane_ids)
```




Build lane lookup map and host-lane ID list from SensorData.





The function clears and repopulates both outputs. Lanes without candidate classification or missing lane ground-truth ID are skipped.






**Parameters**:

* **sensor_data**: Source SensorData containing detected lanes.
* **lane_class_by_id**: Output lane lookup map.
* **host_lane_ids**: Output list of host lane IDs (<code>is_host_vehicle_lane == true</code>).



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) osi3::SensorData & **sensor_data**
* [LaneClassById](namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing_1_1internal.md#lane__context__utils_8h_1a707084b0c741747496df9a405d81b86e) * **lane_class_by_id**
* std::vector< [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > * **host_lane_ids**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::sensors::post_processing::internal::BuildLaneClassByIdAndHostLaneIds"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)