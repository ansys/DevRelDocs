# Create customized KPIs and use it as evaluator activity

As extended ability of customized activity, you can also bring your own KPIs into simulation and calculate them as part of results.

## Interfaces and topic definition

Three main interface for customized KPIs you must have a look on:

1. `core/kpi/definition/kpi_definition.h`
2. `core/kpi/i_kpi/i_kpi.h`
3. `core/kpi/kpi_message_converter/kpi_message_converter.h`
4. `evaluator/gt_base_evaluator/gt_base_evaluator.h`

In `core/kpi/definition/kpi_definition.h` defines a native C++ data structure where one KPI value can be stored.

```cpp
struct KpiContent
{
    core::time::Timestamp timestamp;
    std::string name;
    Datatype data_type;
    std::string value;
    std::string unit;
    Type type;
};
using KpiMessage = std::vector<KpiContent>;
```

where `data_type` , `value` and `unit` are all defined in string, so that different KPIs could be logged into different formats with more freedom.

`KpiMessage` is a vector of `KpiContent` . This is native C++ type and it can be converted into DDS message type rtidds:: KpiMessage using converter `core/kpi/kpi_message_converter/kpi_message_converter.h` . Message published into `KpiLoggerTopic` will be captured by default Default KPI Logger​ and each extra KPI content will be logged into the output json as additional value of complete KPI results.

`IKpi` is responsible for representing one KPI core calculation logic (i.e. calculation of TTC, Max Acceleration etc.) and provide definition of calls to be used inside an evaluator.

`KpiMessageConverter` is implementation to convert KpiMessage struct into DDS type kpi message so that the msg can be published through DDS network.

`GtBaseEvaluator` is the implementation of `GroundTruth` templated `IEvaluator` interface and provides users ability to evaluate KPIs that are added by themselves. This class controls all KPIs centrally and fill/reset the `KpiMessage` accordingly based on each KPI's calculation result.

## Example customized KPI evaluator

There is an example implementation of customized evaluator activity provided by the Simulation Framework delivery, namely `simulation_framework/example/my_kpi_evaluator_activity/my_kpi_evaluator_activity.h` . Same as above example, this `MyKpiEvaluatorActivity` can be executed independently from `simfwk_cli` , and they will wait for simulation requests from `simfwk_cli` if they are selected in the simulation config.

After execute this example, you will get following KPI results in console:

```txt
Successfully ran MyKpiEvaluatorActivity in simulation using simfwk_cli
Output KPIs are available: 
{
    "kpi_1": {
        "datatype": "double",
        "unit": "ms",
        "value": 12345.1
    },
    "kpi_2": {
        "datatype": "double",
        "unit": "ms",
        "value": 54321.2
    }
}
```

Following the code API documentation and instruction in the comments of this example implementation, you might understand how you can build your own KPI evaluation step by step and have the results after simulation is executed.
