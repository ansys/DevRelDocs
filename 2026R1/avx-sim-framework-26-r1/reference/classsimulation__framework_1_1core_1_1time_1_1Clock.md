# Class simulation_framework::core::time::Clock

![][C++]
![][public]

**Definition**: `core/time/clock/clock.h` (line 27)

class [IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)

Implementation of [IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock) interface to manipulate time.





Interface for managing and manipulating simulation time.  





The <code>[IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)</code> class provides a generic interface for handling simulation time. It allows setting the current simulation time, retrieving it in different formats, and incrementing time by a specified duration.





This interface is particularly useful in simulations where time needs to be controlled programmatically rather than relying on real-world time progression.

**Inherits from**:

* [simulation_framework::core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)

## Members

* [Clock](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1ae8da70736b2057ef064ed347106050a0)
* [GetNow](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a42892510ffaad796e1e6944e57b4541b)
* [GetNowAsTimestamp](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a1ce05facc1733248af0c7d0126904442)
* [IncrementBy](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a4b6110fac75c44e37fa2fef35e551fc5)
* [ms_](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1aea060288e6563be195f4af8d7921d341)
* [SetNow](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a6742585d7fab0823c46e9008fe2c7400)
* [SetNow](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1ab2bda9ca1779ea42389abd38a29b7202)
* [~IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a81888860915574a48b4f436e87fbc35e)

## Public functions

<a id="classsimulation__framework_1_1core_1_1time_1_1Clock_1ae8da70736b2057ef064ed347106050a0"></a>
### Function Clock

![][public]


```cpp
simulation_framework::core::time::Clock::Clock(const milliseconds &ms=milliseconds(0))
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) milliseconds & **ms** = milliseconds(0) 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::Clock::Clock"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1Clock_1a6742585d7fab0823c46e9008fe2c7400"></a>
### Function SetNow

![][public]


```cpp
void simulation_framework::core::time::Clock::SetNow(const milliseconds &ms) override
```


Sets the current simulation time.

This method allows setting the simulation's current time to a specific duration from the epoch (0 milliseconds). 
**Parameters**:

* **ms**: The time to set, represented as milliseconds from the epoch.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) milliseconds & **ms**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetNow](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a1c559515085520b85213dd1e85527149)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::Clock::SetNow"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1Clock_1ab2bda9ca1779ea42389abd38a29b7202"></a>
### Function SetNow

![][public]


```cpp
void simulation_framework::core::time::Clock::SetNow(const Timestamp &timestamp) override
```


Sets the current simulation time using a timestamp.

This method sets the simulation's current time to a specific point in time, represented as a <code>Timestamp</code> object. 
**Parameters**:

* **timestamp**: The point in time to set as the current simulation time.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Timestamp & **timestamp**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetNow](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a9a5d393c4f9087ad954b0d754cf73fb6)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::Clock::SetNow"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1Clock_1a42892510ffaad796e1e6944e57b4541b"></a>
### Function GetNow

![][public]
![][const]


```cpp
milliseconds simulation_framework::core::time::Clock::GetNow() const override
```


Gets the current simulation time in milliseconds.

This method returns the current simulation time as a duration measured in milliseconds since the epoch (0 milliseconds). 
**Returns**:

The current simulation time as a <code>milliseconds</code> object.



**Return type**: milliseconds

**Reimplements**: [GetNow](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a23ad965396946a6fad21103baf8ed5ff)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::Clock::GetNow"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1Clock_1a1ce05facc1733248af0c7d0126904442"></a>
### Function GetNowAsTimestamp

![][public]
![][const]


```cpp
Timestamp simulation_framework::core::time::Clock::GetNowAsTimestamp() const override
```


Gets the current simulation time as a timestamp.

This method returns the current simulation time as a <code>Timestamp</code> object, providing a more precise representation of the current point in time. 
**Returns**:

The current simulation time as a <code>Timestamp</code> object.



**Return type**: Timestamp

**Reimplements**: [GetNowAsTimestamp](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a08b2e6144d8dc49bce2f684e6fdf8199)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::Clock::GetNowAsTimestamp"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1Clock_1a4b6110fac75c44e37fa2fef35e551fc5"></a>
### Function IncrementBy

![][public]


```cpp
void simulation_framework::core::time::Clock::IncrementBy(const milliseconds &ms) override
```


Increments the simulation time by a specified duration.

This method adds the given duration (in milliseconds) to the current simulation time. It is useful for progressing the simulation clock in a controlled manner. 
**Parameters**:

* **ms**: The duration to add to the current simulation time.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) milliseconds & **ms**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [IncrementBy](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a93cef605ec46a30ae9542ba40e5bda21)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::Clock::IncrementBy"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"clock_8h"},"children":[{"type":"text","text":"clock.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)