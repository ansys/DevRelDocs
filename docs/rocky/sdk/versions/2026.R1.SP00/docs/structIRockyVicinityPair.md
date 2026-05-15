# Structure IRockyVicinityPair

<a id="structIRockyVicinityPair"></a>

![][C++]
![][public]

**#include <rocky\_vicinity\_pair\_api.hpp>**



The <code>[IRockyVicinityPair](structIRockyVicinityPair.md#structIRockyVicinityPair)</code> class models the vicinity between two distinct simulation entities (particles or triangles) and provide methods to allow the computation of vicinity conditions depending on the custom model that one is implementing.

## Members

* [get\_distance](structIRockyVicinityPair.md#structIRockyVicinityPair_1a34b7e627e2b53650ec7a6b230528ee6f)
* [get\_home\_particle](structIRockyVicinityPair.md#structIRockyVicinityPair_1a6453667273c56febeed7c2806fa4a516)
* [get\_near\_particle](structIRockyVicinityPair.md#structIRockyVicinityPair_1a1085098207fdb2d038dcf55d10c318e1)
* [get\_near\_triangle](structIRockyVicinityPair.md#structIRockyVicinityPair_1a3d83f2759c519cadcd1a4a4199be6bb1)
* [get\_squared\_distance](structIRockyVicinityPair.md#structIRockyVicinityPair_1ac697ba9682008871b110a31c8be3a48b)
* [is\_particle\_particle](structIRockyVicinityPair.md#structIRockyVicinityPair_1a4e8173adc82c91c5d26edd8b0100c2f3)
* [is\_particle\_triangle](structIRockyVicinityPair.md#structIRockyVicinityPair_1ad5120c027dba90895cf9d05d99e54e7d)

## Public functions

### Function get\_home\_particle

<a id="structIRockyVicinityPair_1a6453667273c56febeed7c2806fa4a516"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyParticle IRockyVicinityPair::get_home_particle() const
```




**Returns**:

An <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> object representing the _home_ particle. This object gives access to several instantaneous properties associated to that particle.



**Return type**: ROCKY_FUNCTIONS [IRockyParticle](structIRockyParticle.md#structIRockyParticle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::get_home_particle"}]}`
-->

### Function get\_near\_particle

<a id="structIRockyVicinityPair_1a1085098207fdb2d038dcf55d10c318e1"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyParticle IRockyVicinityPair::get_near_particle() const
```




**Returns**:

An <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> object representing the _near_ particle. This object gives access to several instantaneous properties associated to that particle.



**Return type**: ROCKY_FUNCTIONS [IRockyParticle](structIRockyParticle.md#structIRockyParticle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::get_near_particle"}]}`
-->

### Function get\_near\_triangle

<a id="structIRockyVicinityPair_1a3d83f2759c519cadcd1a4a4199be6bb1"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyGeometryTriangle IRockyVicinityPair::get_near_triangle() const
```




**Returns**:

An <code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> object representing the _near_ triangle. This object gives access to several instantaneous properties associated to that triangle.



**Return type**: ROCKY_FUNCTIONS [IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::get_near_triangle"}]}`
-->

### Function is\_particle\_particle

<a id="structIRockyVicinityPair_1a4e8173adc82c91c5d26edd8b0100c2f3"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyVicinityPair::is_particle_particle() const
```




**Returns**:

True if the pair represents a particle-to-particle vicinity, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::is_particle_particle"}]}`
-->

### Function is\_particle\_triangle

<a id="structIRockyVicinityPair_1ad5120c027dba90895cf9d05d99e54e7d"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyVicinityPair::is_particle_triangle() const
```




**Returns**:

True if the pair represents a particle-to-triangle vicinity, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::is_particle_triangle"}]}`
-->

### Function get\_distance

<a id="structIRockyVicinityPair_1a34b7e627e2b53650ec7a6b230528ee6f"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyVicinityPair::get_distance() const
```




**Returns**:

The distance between the centroids of the two entities in the vicinity.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::get_distance"}]}`
-->

### Function get\_squared\_distance

<a id="structIRockyVicinityPair_1ac697ba9682008871b110a31c8be3a48b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyVicinityPair::get_squared_distance() const
```




!> **Attention** \
This method performs better than <code>[IRockyVicinityPair](structIRockyVicinityPair.md#structIRockyVicinityPair)</code> because it don't require a computational costly computation of a square root of the squared distance between entities centroids.


**Returns**:

The squared distance between the centroids of the two entities in the vicinity.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyVicinityPair::get_squared_distance"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)