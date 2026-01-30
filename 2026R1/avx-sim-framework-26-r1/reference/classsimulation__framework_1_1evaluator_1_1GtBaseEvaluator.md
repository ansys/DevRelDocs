# Class simulation_framework::evaluator::GtBaseEvaluator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/gt_base_evaluator/gt_base_evaluator.h` (line 132)

This is the implementation of IEvaluator interface and provides users ability to evaluate KPIs that are added by themselves. This class controls all KPIs centrally and fill/reset the KpiMessage accordingly based on each KPI's calculation result.

To join the simulation, the evaluator must be injected into an Activity and required KPIs need to be added using [AddKpi(std::unique_ptr\<core::kpi::IKpi\<osi3::GroundTruth\>\> kpi)](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a7d9970bad7943a552c385b01785fb66f).





Example of creating one customized KpiEvaluatorActivity containing 2 KPIs and publish the KpiMessage into KpiLoggerTopic to have the KPI results in output json 
```cpp

class MyFirstKpi : public core::kpi::IKpi<osi3::GroundTruth>
{
  public:
    MyFirstKpi(const std::string& kpi_name): kpi_name_(kpi_name) {}
    void Init() override {}
    void Reset() override {}
    kpi::KpiContent CalculateKpi(const osi3::GroundTruth& ground_truth) override
    {
        kpi::KpiContent kpi;
        return kpi;
    }
    kpi::Type GetKpiType() const override { return kpi::Type::kScalar; }
};
class MySecondKpi : public core:kpi::IKpi<osi3::GroundTruth> { 

class MyKpiEvaluatorActivity : public BaseActivity
{
  public:
    MyKpiEvaluatorActivity(const std::string& name,
                           const Topics& topics,
                           evaluator::std::unique_ptr<kpi::IKpiMessageConverter> kpi_message_converter,
                           std::unique_ptr<core::IEvaluator<osi3::GroundTruth>> evaluator)
        : BaseActivity(name, topics),
          kpi_message_converter_(std::move(kpi_message_converter)),
          evaluator_(std::move(evaluator))
    {
        evaluator_->Init();
    }

    ~MyKpiEvaluatorActivity() = default;

    void AddPublisherAndSubscriber() override
    {
        AddSubscriber<core::Topic<rtidds::GenericBytesMessage>>(
            "SensorViewTopic", [&](const rtidds::GenericBytesMessage& sv_bytes_msg) {
                if (!osi_proto_sv_.ParseFromArray(sv_bytes_msg.bytes_array().data(), sv_bytes_msg.size()))
                {
                    throw std::runtime_error(
                        "[MyKpiEvaluatorActivity]: Error parsing "
                        "osi proto msg from bytes array!");
                }
            });

        AddPublisher<core::Topic<rtidds::KpiMessage>>("KpiLoggerTopic", [&]() {
            const auto dds_kpi_message = kpi_message_converter_->ConvertToDds(kpi_message_);
            return dds_kpi_message;
        });
    }

    void ExecuteStep() override
    {
        evaluator_->SetInput(osi_proto_sv_.global_ground_truth());
        evaluator_->Evaluate();
        kpi_message_ = evaluator_->GetKpiMessage();
    }

  private:
    evaluator::std::unique_ptr<kpi::IKpiMessageConverter> kpi_message_converter_;
    std::unique_ptr<core::IEvaluator<osi3::GroundTruth>>evaluator_;
    core::kpi::KpiMessage kpi_message_;
    osi3::SensorView osi_proto_sv_{};
};


 auto my_first_kpi = std::make_unique<MyFirstKpi>("kpi_1");
 auto my_second_kpi = std::make_unique<MySecondKpi>("kpi_2");

 auto evaluator = std::make_unique<simulation_framework::evaluator::BaseEvaluator>();
 evaluator->AddKpi(std::move(my_first_kpi));
 evaluator->AddKpi(std::move(my_second_kpi));

 auto kpi_message_converter = std::make_unique<core::kpi::KpiMessageConverter>();

 auto my_kpi_evaluator_activity = std::make_unique<MyKpiEvaluatorActivity>(
                                                 "MyKpiEvaluatorActivity",
Topics{autonomy::topic_registry::GetExistingTopicById("SensorViewTopic"),
autonomy::topic_registry::GetExistingTopicById("KpiLoggerTopic")},
                                                 std::move(kpi_message_converter),
                                                 std::move(evaluator));
```

**Inherits from**:

* [simulation_framework::core::IEvaluator\< osi3::GroundTruth \>](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator)

## Members

* [AddKpi](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a7d9970bad7943a552c385b01785fb66f)
* [AddKpi](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a382b22c39881af2b0397df0caee82063)
* [Evaluate](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a09b8959aaaacce2b842abfd304b63674)
* [GetKpiMessage](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a2e37677f4b8884d78f028589c6adac48)
* [ground_truth_](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1af9435daa8efa20eadbd158f318a94bb8)
* [GtBaseEvaluator](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1aa962203ea42d414d0584ada57d955203)
* [Init](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a930cb234264aa995b30eab8c537a15ad)
* [kpi_message_](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a3b0accae5ed64a6e27b7c1643dca079e)
* [kpis_](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a810c42382e79c8bb888193f874129d8d)
* [Reset](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1acacfb885fab2f83b114e870fa9433f3d)
* [SetInput](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1adc68080d44c2f5a294dbb511fe7d1c77)
* [~GtBaseEvaluator](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1af8902ec9d60bf7a6fbb49f0d18d9c902)
* [~IEvaluator](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a605a97c7c7aef7588ff1ce0957d97f79)

## Private attributes

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a810c42382e79c8bb888193f874129d8d"></a>
### Variable kpis_

![][private]

**Definition**: `autonomy/evaluator/gt_base_evaluator/gt_base_evaluator.h` (line 174)


```cpp
std::vector<std::unique_ptr<core::kpi::IKpi<osi3::GroundTruth> > > simulation_framework::evaluator::GtBaseEvaluator::kpis_
```


A vector of KPI pointer which needs to be calculated in this e evaluator.





**Type**: std::vector< std::unique_ptr< [core::kpi::IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)< osi3::GroundTruth > > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::kpis_"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1af9435daa8efa20eadbd158f318a94bb8"></a>
### Variable ground_truth_

![][private]

**Definition**: `autonomy/evaluator/gt_base_evaluator/gt_base_evaluator.h` (line 177)


```cpp
osi3::GroundTruth simulation_framework::evaluator::GtBaseEvaluator::ground_truth_
```


OSI GroundTruth protobuf message as input of all KPI calculations.





**Type**: osi3::GroundTruth

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::ground_truth_"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a3b0accae5ed64a6e27b7c1643dca079e"></a>
### Variable kpi_message_

![][private]

**Definition**: `autonomy/evaluator/gt_base_evaluator/gt_base_evaluator.h` (line 180)


```cpp
core::kpi::KpiMessage simulation_framework::evaluator::GtBaseEvaluator::kpi_message_ {}
```


A vector of KpiContent stores the results of each KPI calculation.





**Type**: core::kpi::KpiMessage

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::kpi_message_"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1aa962203ea42d414d0584ada57d955203"></a>
### Function GtBaseEvaluator

![][public]


```cpp
simulation_framework::evaluator::GtBaseEvaluator::GtBaseEvaluator()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::GtBaseEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1af8902ec9d60bf7a6fbb49f0d18d9c902"></a>
### Function ~GtBaseEvaluator

![][public]


```cpp
virtual simulation_framework::evaluator::GtBaseEvaluator::~GtBaseEvaluator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::~GtBaseEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a930cb234264aa995b30eab8c537a15ad"></a>
### Function Init

![][public]


```cpp
void simulation_framework::evaluator::GtBaseEvaluator::Init()
```




Initial all KPIs (call all kpi->[Init()](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a930cb234264aa995b30eab8c537a15ad);) which are added in this evaluator



**Return type**: void

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1ac62458dfff2bf4a0287bc48335bec4ff)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::Init"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1acacfb885fab2f83b114e870fa9433f3d"></a>
### Function Reset

![][public]


```cpp
void simulation_framework::evaluator::GtBaseEvaluator::Reset()
```




Clear KpiMessage and reset all KPIs (call all kpi->[Reset()](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1acacfb885fab2f83b114e870fa9433f3d);) which are added in this evaluator



**Return type**: void

**Reimplements**: [Reset](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a4f2140b6e5dc9289d084c601c1f28cf2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::Reset"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a09b8959aaaacce2b842abfd304b63674"></a>
### Function Evaluate

![][public]


```cpp
void simulation_framework::evaluator::GtBaseEvaluator::Evaluate()
```




Calculate all KPIs (call all kpi->CalculateKpi(gt);) which are added in this evaluator and fill the KpiMessage



**Return type**: void

**Reimplements**: [Evaluate](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a251fb9feee11d29b6c4bd5161a7b7089)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::Evaluate"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a7d9970bad7943a552c385b01785fb66f"></a>
### Function AddKpi

![][public]


```cpp
void simulation_framework::evaluator::GtBaseEvaluator::AddKpi(std::unique_ptr< core::kpi::IKpi< osi3::GroundTruth > > kpi) override
```




Add one KPI into this evaluator 
**Parameters**:

* **kpi**: The iKpi interface



**Parameters**:

* std::unique_ptr< [core::kpi::IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)< osi3::GroundTruth > > **kpi**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::AddKpi"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a2e37677f4b8884d78f028589c6adac48"></a>
### Function GetKpiMessage

![][public]
![][const]


```cpp
core::kpi::KpiMessage simulation_framework::evaluator::GtBaseEvaluator::GetKpiMessage() const
```




Get the filled KPI messages based on calculation of all KPIs 
**Returns**:

A kpi::KpiMessage object, the vector of KpiContent represents of all added KPIs into this evaluator



**Return type**: core::kpi::KpiMessage

**Reimplements**: [GetKpiMessage](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a81ab03795b81308e647d4f7022a64d4a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::GetKpiMessage"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1adc68080d44c2f5a294dbb511fe7d1c77"></a>
### Function SetInput

![][public]


```cpp
void simulation_framework::evaluator::GtBaseEvaluator::SetInput(const osi3::GroundTruth &ground_truth)
```




Set GroundTruth message for KPI calculations 
**Parameters**:

* **ground_truth**: The osi groundtruth type in protobuf



**Parameters**:

* const osi3::GroundTruth & **ground_truth**

**Return type**: void

**Reimplements**: [SetInput](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a17db67a251425e3ecc47d45c03a1b056)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::GtBaseEvaluator::SetInput"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"gt__base__evaluator_8h"},"children":[{"type":"text","text":"gt_base_evaluator.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)