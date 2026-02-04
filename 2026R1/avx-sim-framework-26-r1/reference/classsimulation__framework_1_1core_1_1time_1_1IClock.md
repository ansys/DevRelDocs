# Class simulation_framework::core::time::IClock

![][C++]
![][public]

**Definition**: `core/time/i_clock/i_clock.h` (line 38)

Interface for managing and manipulating simulation time.

The <code>[IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)</code> class provides a generic interface for handling simulation time. It allows setting the current simulation time, retrieving it in different formats, and incrementing time by a specified duration.





This interface is particularly useful in simulations where time needs to be controlled programmatically rather than relying on real-world time progression.

**Inherited by**:

* [simulation_framework::core::time::Clock](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock)

## Members

* [GetNow](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a23ad965396946a6fad21103baf8ed5ff)
* [GetNowAsTimestamp](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a08b2e6144d8dc49bce2f684e6fdf8199)
* [IncrementBy](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a93cef605ec46a30ae9542ba40e5bda21)
* [SetNow](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a1c559515085520b85213dd1e85527149)
* [SetNow](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a9a5d393c4f9087ad954b0d754cf73fb6)
* [~IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock_1a81888860915574a48b4f436e87fbc35e)

## Public functions

<a id="classsimulation__framework_1_1core_1_1time_1_1IClock_1a81888860915574a48b4f436e87fbc35e"></a>
### Function ~IClock

![][public]


```cpp
virtual simulation_framework::core::time::IClock::~IClock()=default
```


Virtual destructor.

Ensures proper cleanup of derived classes.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::IClock::~IClock"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1IClock_1a1c559515085520b85213dd1e85527149"></a>
### Function SetNow

![][public]


```cpp
virtual void simulation_framework::core::time::IClock::SetNow(const milliseconds &ms)=0
```


Sets the current simulation time.

This method allows setting the simulation's current time to a specific duration from the epoch (0 milliseconds). 

**Parameters**:

* **ms**: The time to set, represented as milliseconds from the epoch.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) milliseconds & **ms**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetNow](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a6742585d7fab0823c46e9008fe2c7400)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::IClock::SetNow"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1IClock_1a9a5d393c4f9087ad954b0d754cf73fb6"></a>
### Function SetNow

![][public]


```cpp
virtual void simulation_framework::core::time::IClock::SetNow(const Timestamp &timestamp)=0
```


Sets the current simulation time using a timestamp.

This method sets the simulation's current time to a specific point in time, represented as a <code>Timestamp</code> object. 

**Parameters**:

* **timestamp**: The point in time to set as the current simulation time.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Timestamp & **timestamp**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetNow](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1ab2bda9ca1779ea42389abd38a29b7202)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::IClock::SetNow"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1IClock_1a23ad965396946a6fad21103baf8ed5ff"></a>
### Function GetNow

![][public]
![][const]


```cpp
virtual milliseconds simulation_framework::core::time::IClock::GetNow() const =0
```


Gets the current simulation time in milliseconds.

This method returns the current simulation time as a duration measured in milliseconds since the epoch (0 milliseconds). 

**Returns**:

The current simulation time as a <code>milliseconds</code> object.



**Return type**: milliseconds

**Reimplemented by**:

* [GetNow](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a42892510ffaad796e1e6944e57b4541b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::IClock::GetNow"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1IClock_1a08b2e6144d8dc49bce2f684e6fdf8199"></a>
### Function GetNowAsTimestamp

![][public]
![][const]


```cpp
virtual Timestamp simulation_framework::core::time::IClock::GetNowAsTimestamp() const =0
```


Gets the current simulation time as a timestamp.

This method returns the current simulation time as a <code>Timestamp</code> object, providing a more precise representation of the current point in time. 

**Returns**:

The current simulation time as a <code>Timestamp</code> object.



**Return type**: Timestamp

**Reimplemented by**:

* [GetNowAsTimestamp](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a1ce05facc1733248af0c7d0126904442)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::IClock::GetNowAsTimestamp"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1IClock_1a93cef605ec46a30ae9542ba40e5bda21"></a>
### Function IncrementBy

![][public]


```cpp
virtual void simulation_framework::core::time::IClock::IncrementBy(const milliseconds &ms)=0
```


Increments the simulation time by a specified duration.

This method adds the given duration (in milliseconds) to the current simulation time. It is useful for progressing the simulation clock in a controlled manner. 

**Parameters**:

* **ms**: The duration to add to the current simulation time.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) milliseconds & **ms**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [IncrementBy](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock_1a4b6110fac75c44e37fa2fef35e551fc5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::IClock::IncrementBy"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__clock_8h"},"children":[{"type":"text","text":"i_clock.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)