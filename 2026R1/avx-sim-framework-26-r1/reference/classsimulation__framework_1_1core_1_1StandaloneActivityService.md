<a id="classsimulation__framework_1_1core_1_1StandaloneActivityService"></a>
# Class simulation\_framework::core::StandaloneActivityService

![][C++]
![][public]

#include: <[standalone_activity_service.h](standalone__activity__service_8h.md#standalone__activity__service_8h)>

It provides a running process of desired activity returned by interface [IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator) and keeps it communicating and being scheduled by simulation framework core process.

If you have implemented my_activity_creator.h of interface [IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator) based on example in simfwk-core/service/standalone_activity_service/standalone_activity_creator/i_standalone_activity_creator.h, then you can create an executable using this class, which runs your desired activity as service, keep talking and being scheduled by simfwk_cli.





This example shows how to implement this process and join the simulation from standalone 
```cpp
#include "core/service/standalone_activity_service/standalone_activity_service.h"
#include "core/my_activity_creator.h"

int main()
{
    ;

    std::unique_ptr<IStandaloneActivityCreator> my_activity_creator =
        std::make_unique<MyActivityCreator>("my_activity_name");

    auto standalone_activity_service =
        std::make_unique<StandaloneActivityService>(std::move(my_activity_creator));

    return standalone_activity_service->Run();
}
```

## Members

* [Run](classsimulation__framework_1_1core_1_1StandaloneActivityService.md#classsimulation__framework_1_1core_1_1StandaloneActivityService_1a421e29a06e115be20823def55afaede1)
* [StandaloneActivityService](classsimulation__framework_1_1core_1_1StandaloneActivityService.md#classsimulation__framework_1_1core_1_1StandaloneActivityService_1a2b5fef164520062893b4ba86072763ae)
* [~StandaloneActivityService](classsimulation__framework_1_1core_1_1StandaloneActivityService.md#classsimulation__framework_1_1core_1_1StandaloneActivityService_1a2d96ab83e3bae2d6c557f8a55428c966)

## Public functions

<a id="classsimulation__framework_1_1core_1_1StandaloneActivityService_1a2b5fef164520062893b4ba86072763ae"></a>
### Function StandaloneActivityService

![][public]


```cpp
simulation_framework::core::StandaloneActivityService::StandaloneActivityService(std::unique_ptr< IStandaloneActivityCreator > standalone_activity_creator)
```




Construct an Standalone Activity as Service to join simulation standalonely 
**Parameters**:

* **standalone_activity_creator**: An interface defines how the activity should be instanciated



**Parameters**:

* std::unique_ptr< [IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator) > **standalone_activity_creator**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StandaloneActivityService::StandaloneActivityService"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1StandaloneActivityService_1a2d96ab83e3bae2d6c557f8a55428c966"></a>
### Function ~StandaloneActivityService

![][public]


```cpp
simulation_framework::core::StandaloneActivityService::~StandaloneActivityService()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StandaloneActivityService::~StandaloneActivityService"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1StandaloneActivityService_1a421e29a06e115be20823def55afaede1"></a>
### Function Run

![][public]


```cpp
int simulation_framework::core::StandaloneActivityService::Run()
```


Start the Standalone Activity service and keep it alive waiting for standalone request on this Activity from simfwk core process (simfwk_cli)

**Returns**:

Programm return code which indicates whether the Standalone Activity is healthy



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StandaloneActivityService::Run"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"standalone__activity__service_8h"},"children":[{"type":"text","text":"standalone_activity_service.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)