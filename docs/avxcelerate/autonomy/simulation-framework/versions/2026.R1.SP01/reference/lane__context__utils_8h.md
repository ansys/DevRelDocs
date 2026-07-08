# File lane_context_utils.h

![][C++]

**Location**: `autonomy/sensors/post_processing/internal/lane_context_utils.h`

Shared helpers for lane-context based post-processing.

© 2026 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)
* [simulation_framework::autonomy::sensors](namespacesimulation__framework_1_1autonomy_1_1sensors.md#namespacesimulation__framework_1_1autonomy_1_1sensors)
* [simulation_framework::autonomy::sensors::post_processing](namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing.md#namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing)
* [simulation_framework::autonomy::sensors::post_processing::internal](namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing_1_1internal.md#namespacesimulation__framework_1_1autonomy_1_1sensors_1_1post__processing_1_1internal)

## Includes

* <osi_sensordata.pb.h>
* <cstdint>
* <unordered_map>
* <unordered_set>
* <vector>




## Source


```cpp


#ifndef SIMULATION_FRAMEWORK_AUTONOMY_SENSORS_POSTPROCESSING_INTERNAL_LANECONTEXTUTILS_H_
#define SIMULATION_FRAMEWORK_AUTONOMY_SENSORS_POSTPROCESSING_INTERNAL_LANECONTEXTUTILS_H_

#include <osi_sensordata.pb.h>
#include <cstdint>
#include <unordered_map>
#include <unordered_set>
#include <vector>

namespace simulation_framework
{
namespace autonomy
{
namespace sensors
{
namespace post_processing
{
namespace internal
{

using LaneClassById = std::unordered_map<uint64_t, const osi3::Lane::Classification*>;

inline const osi3::Lane::Classification* GetLaneClass(const osi3::DetectedLane& lane)
{
    if (lane.candidate_size() < 1)
    {
        return nullptr;
    }
    return &lane.candidate(0).classification();
}

inline uint64_t GetFirstIdOrZero(const google::protobuf::RepeatedPtrField<osi3::Identifier>& ids)
{
    return ids.empty() ? 0UL : ids.Get(0).value();
}

inline uint64_t GetBoundaryIdOfLane(const osi3::Lane::Classification* lane_class, bool is_left)
{
    if (lane_class == nullptr)
    {
        return 0UL;
    }
    return is_left ? GetFirstIdOrZero(lane_class->left_lane_boundary_id())
                   : GetFirstIdOrZero(lane_class->right_lane_boundary_id());
}

inline uint64_t GetAdjacentLaneId(const LaneClassById& lane_class_by_id,
                                  uint64_t lane_id,
                                  bool is_left,
                                  bool ensure_driving)
{
    const auto it = lane_class_by_id.find(lane_id);
    if (it == lane_class_by_id.end() || it->second == nullptr)
    {
        return 0UL;
    }

    const auto* lane_class = it->second;
    const uint64_t adjacent_id = is_left ? GetFirstIdOrZero(lane_class->left_adjacent_lane_id())
                                         : GetFirstIdOrZero(lane_class->right_adjacent_lane_id());
    if (adjacent_id == 0UL)
    {
        return 0UL;
    }
    if (!ensure_driving)
    {
        return adjacent_id;
    }

    const auto adj_it = lane_class_by_id.find(adjacent_id);
    if (adj_it == lane_class_by_id.end() || adj_it->second == nullptr)
    {
        return 0UL;
    }
    return adj_it->second->type() == osi3::Lane::Classification::TYPE_DRIVING ? adjacent_id : 0UL;
}

inline uint64_t FindBorderLaneId(const LaneClassById& lane_class_by_id, uint64_t central_lane_id, bool is_left)
{
    uint64_t current = central_lane_id;
    for (int hops = 0; hops < 32; ++hops)
    {
        const uint64_t adjacent = GetAdjacentLaneId(lane_class_by_id, current, is_left, false);
        if (adjacent == 0UL)
        {
            return 0UL;
        }
        const auto adj_it = lane_class_by_id.find(adjacent);
        if (adj_it == lane_class_by_id.end() || adj_it->second == nullptr)
        {
            return 0UL;
        }
        if (adj_it->second->type() != osi3::Lane::Classification::TYPE_DRIVING)
        {
            return adjacent;
        }
        current = adjacent;
    }
    return 0UL;
}

inline void CollectSuccessorLaneIds(const LaneClassById& lane_class_by_id,
                                    uint64_t lane_id,
                                    uint64_t depth,
                                    std::vector<uint64_t>* successor_ids,
                                    std::unordered_set<uint64_t>* visited)
{
    if (depth == 0UL || lane_id == 0UL)
    {
        return;
    }
    const auto it = lane_class_by_id.find(lane_id);
    if (it == lane_class_by_id.end() || it->second == nullptr)
    {
        return;
    }
    for (const auto& lane_pairing : it->second->lane_pairing())
    {
        const uint64_t successor_lane_id = lane_pairing.successor_lane_id().value();
        if (successor_lane_id == 0UL || !visited->insert(successor_lane_id).second)
        {
            continue;
        }
        successor_ids->push_back(successor_lane_id);
        CollectSuccessorLaneIds(lane_class_by_id, successor_lane_id, depth - 1, successor_ids, visited);
    }
}

inline void BuildLaneClassByIdAndHostLaneIds(const osi3::SensorData& sensor_data,
                                             LaneClassById* lane_class_by_id,
                                             std::vector<uint64_t>* host_lane_ids)
{
    lane_class_by_id->clear();
    host_lane_ids->clear();
    lane_class_by_id->reserve(sensor_data.lane_size());
    host_lane_ids->reserve(sensor_data.lane_size());

    for (const auto& lane : sensor_data.lane())
    {
        const auto* lane_class = GetLaneClass(lane);
        if (lane_class == nullptr || lane.header().ground_truth_id_size() < 1)
        {
            continue;
        }
        const uint64_t lane_id = lane.header().ground_truth_id(0).value();
        (*lane_class_by_id)[lane_id] = lane_class;
        if (lane_class->is_host_vehicle_lane())
        {
            host_lane_ids->push_back(lane_id);
        }
    }
}

}  // namespace internal
}  // namespace post_processing
}  // namespace sensors
}  // namespace autonomy
}  // namespace simulation_framework

#endif  // SIMULATION_FRAMEWORK_AUTONOMY_SENSORS_POSTPROCESSING_INTERNAL_LANECONTEXTUTILS_H_
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)