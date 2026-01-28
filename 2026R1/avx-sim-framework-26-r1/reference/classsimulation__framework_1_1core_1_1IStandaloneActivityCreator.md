<a id="classsimulation__framework_1_1core_1_1IStandaloneActivityCreator"></a>
# Class simulation\_framework::core::IStandaloneActivityCreator

![][C++]
![][public]

#include: <[i_standalone_activity_creator.h](i__standalone__activity__creator_8h.md#i__standalone__activity__creator_8h)>

This is the interface class for creating a standalone activity service. It defines how a customized activity needs to be instantiated through or not through StandaloneInitData.

You have already the example how you create an activity "MyActivity" in simfwk-core/lifecycle/activity/base_activity.h





This example shows how to implement the [IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator) interface based on "MyActivity" 
```cpp
   using TopicToBePublished = Topic<MsgToBePublished>;
   using TopicSubscribingOn = Topic<MsgSubscribingOn>;
  
   class MyActivityCreator : public IStandaloneActivityCreator
   {
     public:
       MyActivityCreator(const std::string& name) : standalone_activity_name_(name) {}
       std::unique_ptr<IActivity> Create(const core::StandaloneInitData& standalone_init_data)
override
       {
           std::shared_ptr<ITopic> topic_going_to_publish = std::make_shared<TopicToBePublished>("TopicToBePublished");
           std::shared_ptr<ITopic> topic_want_to_receive = std::make_shared<TopicSubscribingOn>("TopicSubscribingOn");
  
           return std::make_unique<MyActivity>(
               standalone_activity_name_, Topics{topic_going_to_publish, topic_want_to_receive}, MyLogic{});
       }
       std::string GetName() override { return standalone_activity_name_; }
  
     private:
       std::string standalone_activity_name_;
   };
```

## Members

* [Create](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator_1a4c1bc889e97510c6357b16f893c755b4)
* [GetName](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator_1a61fa7488f9850ed80c0f102da8a966bd)
* [~IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator_1aacad7964a9dc269209c7e8edbd8f3931)

## Public functions

<a id="classsimulation__framework_1_1core_1_1IStandaloneActivityCreator_1aacad7964a9dc269209c7e8edbd8f3931"></a>
### Function ~IStandaloneActivityCreator

![][public]


```cpp
virtual simulation_framework::core::IStandaloneActivityCreator::~IStandaloneActivityCreator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IStandaloneActivityCreator::~IStandaloneActivityCreator"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IStandaloneActivityCreator_1a61fa7488f9850ed80c0f102da8a966bd"></a>
### Function GetName

![][public]


```cpp
virtual std::string simulation_framework::core::IStandaloneActivityCreator::GetName()=0
```




**Returns**:

the name of this standalone activity



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IStandaloneActivityCreator::GetName"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IStandaloneActivityCreator_1a4c1bc889e97510c6357b16f893c755b4"></a>
### Function Create

![][public]


```cpp
virtual std::unique_ptr< core::lifecycle::IActivity > simulation_framework::core::IStandaloneActivityCreator::Create(const core::StandaloneInitData &standalone_init_data)=0
```


Create an std::unique_ptr<IActivity> which will be scheduled remotely through scheduling event.

**Parameters**:

* **standalone_init_data**: The class contains inputs required for this Standalone Activity. The StandaloneActivityCreator is responsible to decode this properly and use the inputs data for initialization of BaseActivity


**Returns**:

A pointer of IActivity interface which will be controlled remotely by simfwk core



**Parameters**:

* const core::StandaloneInitData & **standalone_init_data**

**Return type**: std::unique_ptr< [core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IStandaloneActivityCreator::Create"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__standalone__activity__creator_8h"},"children":[{"type":"text","text":"i_standalone_activity_creator.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)