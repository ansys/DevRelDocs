# Class simulation_framework::utilities::vehicle::properties::VehicleProperties

![][C++]
![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_properties/vehicle_properties.h` (line 105)





## Members

* [GetControllerTuning](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a8708e289511a4d681ceff14cb06a00fd)
* [GetLimits](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a2f795eccb5bc8474b287f1775a5a40d0)
* [GetSingleTrackParameters](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a9c0e516194bc07fdfa84c6e5a3e88a1e)
* [ParseFromJson](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a158ea5678a909943a315c66d56097561)
* [ValidateVehicleJson](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1af07e545c1c26235b1979607de947f663)
* [VehicleProperties](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a3b49a307a4885dacb7fe86173d0da939)
* [VehicleProperties](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a46dc9fd857b9deb701a4de963a4e1bd8)

## Public functions

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a3b49a307a4885dacb7fe86173d0da939"></a>
### Function VehicleProperties

![][public]


```cpp
simulation_framework::utilities::vehicle::properties::VehicleProperties::VehicleProperties(const std::string &filename)
```


Construct from filename containing vehicle JSON.

**Parameters**:

* **filename**: path to JSON configuration


**Exceptions**:

* **std::runtime_error**: on parse/validation failure



**Parameters**:

* const std::string & **filename**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::properties::VehicleProperties::VehicleProperties"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a46dc9fd857b9deb701a4de963a4e1bd8"></a>
### Function VehicleProperties

![][public]


```cpp
simulation_framework::utilities::vehicle::properties::VehicleProperties::VehicleProperties(const nlohmann::json &config)
```


Construct directly from an already-parsed JSON object.

**Parameters**:

* **config**: parsed nlohmann::json containing vehicle parameters



**Parameters**:

* const nlohmann::json & **config**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::properties::VehicleProperties::VehicleProperties"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a9c0e516194bc07fdfa84c6e5a3e88a1e"></a>
### Function GetSingleTrackParameters

![][public]
![][const]


```cpp
SingleTrackParameters simulation_framework::utilities::vehicle::properties::VehicleProperties::GetSingleTrackParameters() const
```




**Returns**:

single-track geometric parameters (lf, lr)



**Return type**: SingleTrackParameters

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::properties::VehicleProperties::GetSingleTrackParameters"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a2f795eccb5bc8474b287f1775a5a40d0"></a>
### Function GetLimits

![][public]
![][const]


```cpp
Limits simulation_framework::utilities::vehicle::properties::VehicleProperties::GetLimits() const
```




**Returns**:

vehicle limits (acceleration, steering)



**Return type**: Limits

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::properties::VehicleProperties::GetLimits"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties_1a8708e289511a4d681ceff14cb06a00fd"></a>
### Function GetControllerTuning

![][public]
![][const]


```cpp
ControllerTuning simulation_framework::utilities::vehicle::properties::VehicleProperties::GetControllerTuning() const
```




**Returns**:

controller tuning parameters



**Return type**: ControllerTuning

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::properties::VehicleProperties::GetControllerTuning"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)