# Structure IRockySPHElementInteraction

<a id="structIRockySPHElementInteraction"></a>

![][C++]
![][public]

**#include <rocky\_sph\_interaction\_api.hpp>**



<code>[IRockySPHElementInteraction](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction)</code> is a code representation of a pair of neighbor SPH elements within the support region of each other, i.e. they have a force interaction between them. Within Rocky, this pair is usually called _SPH element interaction_.

## Members

* [add\_acceleration](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1a713381036ee74bb8476435037c14124b)
* [add\_force](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1a1ee1b8234e2660a09b7b1a7fe3ba0e07)
* [calculate\_elements\_distance](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1a72569f88c7d9a22615a3287ab7df33db)
* [calculate\_elements\_relative\_velocity](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1a14f9867d6104ce395f3a1d48a03fd9c8)
* [get\_home\_element](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1a7eb0236ba9b25b58b0ca258b1e79976b)
* [get\_home\_element\_velocity](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1acec345cb590d324b9729b8842b777906)
* [get\_near\_element](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1a0e9d2687e1c8a66357730003f850fe26)
* [get\_near\_element\_velocity](structIRockySPHElementInteraction.md#structIRockySPHElementInteraction_1aa71223f8afaf50df1e511041157ba890)

## Public functions

### Function calculate\_elements\_distance

<a id="structIRockySPHElementInteraction_1a72569f88c7d9a22615a3287ab7df33db"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementInteraction::calculate_elements_distance() const
```




**Returns**:

The vector that joins the points at which the two neighbor SPH elements are located.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::calculate_elements_distance"}]}`
-->

### Function calculate\_elements\_relative\_velocity

<a id="structIRockySPHElementInteraction_1a14f9867d6104ce395f3a1d48a03fd9c8"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementInteraction::calculate_elements_relative_velocity() const
```




**Returns**:

The relative velocity vector between the two neighbor SPH elements.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::calculate_elements_relative_velocity"}]}`
-->

### Function get\_home\_element\_velocity

<a id="structIRockySPHElementInteraction_1acec345cb590d324b9729b8842b777906"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementInteraction::get_home_element_velocity() const
```




**Returns**:

The velocity vector of the SPH element labeled as _home_ in the SPH interaction.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::get_home_element_velocity"}]}`
-->

### Function get\_near\_element\_velocity

<a id="structIRockySPHElementInteraction_1aa71223f8afaf50df1e511041157ba890"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementInteraction::get_near_element_velocity() const
```




**Returns**:

The velocity vector of the SPH element labeled as _near_ in the SPH interaction.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::get_near_element_velocity"}]}`
-->

### Function get\_home\_element

<a id="structIRockySPHElementInteraction_1a7eb0236ba9b25b58b0ca258b1e79976b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockySPHElement IRockySPHElementInteraction::get_home_element() const
```




**Returns**:

An <code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code> object representing the SPH element labeled as _home_ in the _SPH interaction_.



**Return type**: ROCKY_FUNCTIONS [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::get_home_element"}]}`
-->

### Function get\_near\_element

<a id="structIRockySPHElementInteraction_1a0e9d2687e1c8a66357730003f850fe26"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockySPHElement IRockySPHElementInteraction::get_near_element() const
```




**Returns**:

An <code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code> object representing the SPH element labeled as _near_ in the _SPH element interaction_.



**Return type**: ROCKY_FUNCTIONS [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::get_near_element"}]}`
-->

### Function add\_force

<a id="structIRockySPHElementInteraction_1a1ee1b8234e2660a09b7b1a7fe3ba0e07"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementInteraction::add_force(float3 force)
```




**By using this method, a SPH module can pass custom calculated forces to the Rocky solver,**:

so they are applied to the SPH elements associated to the referred _SPH element interaction_.


**Parameters**:

* **force**: The force to be applied to the SPH elements, expressed in Cartesian coordinates.



**Parameters**:

* float3 **force**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::add_force"}]}`
-->

### Function add\_acceleration

<a id="structIRockySPHElementInteraction_1a713381036ee74bb8476435037c14124b"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementInteraction::add_acceleration(float3 acceleration)
```




**By using this method, a SPH module can pass custom calculated accelerations to the Rocky**:

solver, so they are added to the SPH elements associated in the referred _SPH element interaction_.


**Parameters**:

* **acceleration**: The acceleration to be added to the SPH elements, expressed in Cartesian coordinates.



**Parameters**:

* float3 **acceleration**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementInteraction::add_acceleration"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)