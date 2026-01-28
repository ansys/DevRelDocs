# Implement and use a standalone activity

Simulation Framework provides the possibility to inject any custom logic into a standalone activity, which is a separate process running outside `simfwk_cli`, but is able to connect with the simfwk core and communicate with other activities.

## Interfaces and topic definition in Autonomy

To implement a customized standalone activity, review these essential pieces:
- `core/lifecycle/activity/base_activity.h`: base class for all activities; implement logic in `ExecuteStep()` and add pub/sub in `AddPublisherAndSubscriber()`.
- `core/service/standalone_activity_service/standalone_activity_service.h`: runs your activity process and binds it to core scheduling/communication.
- `core/service/standalone_activity_service/standalone_activity_creator/i_standalone_activity_creator.h`: defines how your standalone activity is instantiated (with or without `StandaloneInitData`).
- `core/communication/topic_registry.h`: the canonical list of Topic type aliases and DDS message types, with examples.

`topic_registry` defines concrete Topics you can use to create communication channels with given underlying DDS messages. Each `TopicId` (string) is globally unique and represents a single Topic; multiple Topics can share the same underlying message type.

Currently, these Topics and Message Types are available with the Simulation Framework core library:

| Topic Id (string)   | C++ Topic Type                | Underlying DDS Message Type   | Info                                                                                         |
| ------------------- | ----------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| KpiLoggerTopic      | `KpiMessageTopicType`         | `rtidds::KpiMessage`          | Message to KpiLoggerActivity; each `KpiContent` inside `KpiMessage` will be logged to JSON   |
| DriverInputTopic    | `KpiMessageTopicType`         | `rtidds::KpiMessage`          | Message to KpiLoggerActivity as type 'log' (mimic driver behavior data only)                 |
| SensorViewTopic     | `GenericBytesTopicType`       | `rtidds::GenericBytesMessage` | Stores OSI `SensorView` protobuf as bytes                                                    |
| SensorDataTopic     | `GenericBytesTopicType`       | `rtidds::GenericBytesMessage` | Generic sensor data payload (e.g., protobuf) as bytes                                        |
| TrafficUpdateTopic  | `GenericBytesTopicType`       | `rtidds::GenericBytesMessage` | Stores OSI `TrafficUpdate` protobuf as bytes                                                 |
| TrafficCommandTopic | `GenericBytesTopicType`       | `rtidds::GenericBytesMessage` | Stores OSI `TrafficCommand` protobuf as bytes                                                |
| MotionRequestTopic  | `GenericBytesTopicType`       | `rtidds::GenericBytesMessage` | Motion/planning requests as serialized bytes (custom schema allowed)                         |
| FmuInput            | `FmuMessageTopicType`         | `rtidds::FmuMessage`          | FMU input variables (boolean, integer, double, string, bytes)                                |
| FmuOutput           | `FmuMessageTopicType`         | `rtidds::FmuMessage`          | FMU output variables  (boolean, integer, double, string, bytes)                              |
| ScenarioVariableTopic | `VariantMapTopicType`       | `rtidds::VariantMap`          | Key/value scenario variables with typed values and timestamps; see native `VariantMap` utils |

Tip:
- `rtidds::VariantMessage` is an alias of `rtidds::FmuMessage` (and `VariantData`/`VariantDatatype` alias `FmuData`/`FmuDatatype`). See `core/communication/topic_registry.h`.
- For `VariantMap`, see native helpers and converters in `core/communication/utils/variant_map.h` and `core/communication/utils/variant_map_converter.h`.

## Limitation of topic
As mentioned in the sections above, activities can exchange data using messages through `Topics`. Users must be careful to ensure deterministic behavior of the simulation. This means that one `Topic` should have only one publisher. The issue with having multiple publishers on the same topic is that the first message from the faster publisher may arrive on the subscriber side and get consumed, while the second message from the slower publisher might be neglected. Hence, Simulation Framework enforces a "single publisher only" to ensure deterministic behavior of the simulation. If multiple publishers for one topic are instantiated, an exception will be thrown to prevent this.

## Customize your topic

By means of any existing message type provided by `core/communication/topic_registry.h`, you can create any Topic you need for your simulations. Example of creating a new Topic with Message Type `rtidds::GenericBytesMessage` in one line:

```cpp
auto your_topic = std::make_shared<Topic<rtidds::GenericBytesMessage>>("YourTopicId");
```

After that, `your_topic` is ready to be used to instantiate your activities.

## Create a Topic using GenericBytesMessage

`rtidds::GenericBytesMessage` is a generic type that lets you carry arbitrary serialized payloads (protobuf, custom binary, etc.) as a bytes array. A common use case is transporting OSI protobuf messages.

```cpp
/// You have a protobuf message
YourProtobufMessage protobuf_msg;

/// Create a new empty instance of rtidds::GenericBytesMessage
rtidds::GenericBytesMessage generic_msg{};

/// Fill timestamp as needed
generic_msg.timestamp().seconds(1);
generic_msg.timestamp().nanoseconds(0);

/// Get the size of your protobuf msg, allocate a bytes array placeholder and serialize
size_t size = protobuf_msg.ByteSizeLong();
std::vector<unsigned char> proto_data_in_bytes;
proto_data_in_bytes.resize(size);

/// Call protobuf C++ API SerializeToArray to fill the bytes array placeholder
protobuf_msg.SerializeToArray(proto_data_in_bytes.data(), size);

/// Fill the size and bytes_array in generic_msg
generic_msg.size(size);
generic_msg.bytes_array(proto_data_in_bytes);
```

Subscriber-side deserialization:

```cpp
YourProtobufMessage protobuf_msg;
if (!protobuf_msg.ParseFromArray(generic_msg.bytes_array().data(),
                                 static_cast<int>(generic_msg.size())))
{
    throw std::runtime_error("Error parsing proto msg from bytes array in generic_msg!");
}
/// Then use your message as needed
ProcessYourProtoMsg(protobuf_msg);
```

## Create a Topic using VariantMessage (alias of FmuMessage)

`rtidds::VariantMessage` is currently an alias of `rtidds::FmuMessage`. Likewise, `rtidds::VariantData` aliases `rtidds::FmuData`, and `rtidds::VariantDatatype` aliases `rtidds::FmuDatatype`. This gives you a semantic "Variant" naming today while staying 100% compatible with FMU messages.

- See `core/communication/topic_registry.h` for the canonical Topic type aliases, details, and examples
- Topic type: `core::topic_registry::VariantDataTopicType` (uses `rtidds::VariantMessage`)

Publish/subscribe example:

```cpp
#include "core/communication/topic_registry.h"
using namespace simulation_framework;
using namespace simulation_framework::core;

// Inside your Activity
rtidds::VariantMessage variant_msg_{};  // alias of rtidds::FmuMessage

void AddPublisherAndSubscriber() override
{
    // Publisher
    AddPublisher<core::topic_registry::VariantDataTopicType>(
        "VariantDataTopic",
        [&]() { return variant_msg_; }
    );

    // Subscriber
    AddSubscriber<core::topic_registry::VariantDataTopicType>(
        "VariantDataTopic",
        [&](const rtidds::VariantMessage& msg) { HandleVariantData(msg); }
    );
}

void PrepareData()
{
    rtidds::VariantData d;
    d.name("speed");
    d.data_type(rtidds::VariantDatatype::kDouble);
    d.double_value(12.34);
    variant_msg_.data().push_back(d);
}
```

You can equivalently replace `rtidds::VariantMessage` with `rtidds::FmuMessage` in the code above due to the aliasing.

## Create a Topic using VariantMap

`rtidds::VariantMap` offers a flexible key/value format with typed values and an optional timestamp per entry. For convenience, a native C++ `VariantMap` API and bi-directional converters are provided:

- Native map and helpers: `core/communication/utils/variant_map.h`
- Converters: `core/communication/utils/variant_map_converter.h`
- Topic type: `core::topic_registry::VariantMapTopicType` (uses `rtidds::VariantMap`)

Option A — Publish DDS `VariantMap` directly:

```cpp
#include "core/communication/topic_registry.h"
#include "core/message/rtidds/variant_map/variant_map.hpp"

using namespace simulation_framework;
using namespace simulation_framework::core;

rtidds::VariantMap dds_map;
rtidds::Entry entry;
entry.key("temperature");
entry.reference("sensor_ref_001");
entry.value().double_value(25.5);
entry.timestamp(rtidds::Timestamp{1000, 500000});
dds_map.entries().push_back(entry);

AddPublisher<core::topic_registry::VariantMapTopicType>(
    "ScenarioVariableTopic", [&]() { return dds_map; }
);

AddSubscriber<core::topic_registry::VariantMapTopicType>(
    "ScenarioVariableTopic",
    [&](const rtidds::VariantMap& msg) { ConsumeVariantMap(msg); }
);
```

Option B — Use native C++ `VariantMap` and convert to/from DDS:

```cpp
#include "core/communication/topic_registry.h"
#include "core/communication/utils/variant_map.h"
#include "core/communication/utils/variant_map_converter.h"

using namespace simulation_framework;
using namespace simulation_framework::core;

VariantMap native_map;
native_map["sensor_id"] = VariantMapEntry{
    VariantValue{uint32_t{12345}},
    "sensor_ref_001",
    time::Timestamp{2000, 0}
};

// Convert to DDS for publishing
rtidds::VariantMap dds_map = ConvertToDdsVariantMap(native_map);

AddPublisher<core::topic_registry::VariantMapTopicType>(
    "ScenarioVariableTopic", [&]() { return dds_map; }
);

// On reception, convert back to native C++ map for convenient processing
AddSubscriber<core::topic_registry::VariantMapTopicType>(
    "ScenarioVariableTopic",
    [&](const rtidds::VariantMap& msg) {
        VariantMap as_native = ConvertFromDdsVariantMap(msg);
        if (auto id = GetValueByKey<uint32_t>(as_native, "sensor_id")) {
            UseId(*id);
        }
    }
);
```

Option C — Convert from VariantMessage/FmuMessage into VariantMap for publishing:

```cpp
#include "core/communication/utils/variant_map_converter.h"

rtidds::FmuMessage fmu_msg;  // or rtidds::VariantMessage
rtidds::FmuData d;
d.name("rpm");
d.data_type(rtidds::FmuDatatype::kInteger);
d.int_value(3500);
fmu_msg.data().push_back(d);

// Create a VariantMap with common reference/timestamp for all entries
rtidds::VariantMap dds_map = ConvertVariantMessageToVariantMap(
    fmu_msg, "engine_ref", rtidds::Timestamp{3000, 0}
);

// Publish dds_map via VariantMapTopicType as shown above
```

See also:
- `core/communication/topic_registry.h` for all Topic type aliases and examples
- `core/communication/utils/variant_map.h` and `core/communication/utils/variant_map_converter.h` for the native map API and converters

## Examples
Following the API documentation and the many sample activities in `simfwk_examples` (if installed), you can learn step by step how to build activities for any customized simulation. 

## Use one standalone activity

You can use one standalone activity, e.g. `my_test_activity` by defining the following JSON content in `simulation_scheduling`.

```json
{
    "sim_instance_name": "simulation_config_uses_my_test_activity",
    "foxglove":
    {
        "data_streaming": true,
        "host_name": "localhost",
        "port": 8700,
    },
    "save_mcap": true,
    "activities": [
        {
            "name": "groundtruth_generator_activity",
            "is_primary_activity": true,
            "topics_cycling_info": [
                {
                    "topic_id": "__all__",
                    "topic_cycle_time_in_ms": 100
                }
            ],
            "type": "built-in"
        },
        ...
        {
            "name": "my_test_activity",
            "depends_on": [
                "groundtruth_generator_activity"
            ],
            "type": "standalone"
        }
        ...
    ]
}
```

and use it in a simulation by running `simfwk_cli`:

```bash
./simfwk_cli -s my_config.json
```

## Access Global Static Parameters and Timestamp

The `IActivity` interface and its derived class, `core/lifecycle/activity/base_activity.h`, provide several APIs to retrieve information related to the current simulation context. These include the current simulation timestamp, the cycle time for an activity, the simulation output directories, and input files. Available APIs are as follows:

### Simulation timestamp
This API returns the current simulation timestamp, allowing your logic to access the exact simulation time at any given moment during execution.

```cpp
time::Timestamp GetCurrentTimestamp() const final;
```

### Cycle time
This API returns the cycle time for this activity, based on the scheduling configuration you have provided for simulation.

```cpp
std::chrono::milliseconds GetCycleTime() const final;
```

### Simulation output directory
This API returns the directory path where the outputs of the simulation are stored.

```cpp
std::string GetSimulationOutputDirectory() const final;
```

### 4. Customized parameter from comamnd line

This API returns the customized parameters for the simulation as a map.

```cpp
const SimulationParameters::CustomizedParameters& GetCustomizedParameters() const final;
```

In Simulation Framework Autonomy, three common input files, i.e. open scenario, driver input and user settings are assigned as "customized parameters" to the whole simulation and they can be retrieved by above API without any issue if the solver settings are correctly provided. The predefined names of these three common inputs can be found here `autonomy/simulation/sim_instance/simulation_input_definition.h`. To ensure any other custom input files or parameters are available via this API, they must be provided through CLI arguments using the pattern "name:value". For more instructions, please see [command line tool](./../documentation/markdown/command_line_tool.md)