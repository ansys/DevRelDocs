# Structure IRockyBreakableParticle

<a id="structIRockyBreakableParticle"></a>

![][C++]
![][public]

**#include <rocky\_particle\_api.hpp>**



<code>[IRockyBreakableParticle](structIRockyBreakableParticle.md#structIRockyBreakableParticle)</code> is an interface for particles enabled to break through instantaneous breakage during a simulation. It may used for the initialization of <code>[IRockyParticleBreakageScalars](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars)</code> that custom instantaneous breakage and/or fragment size distribution models may need.

## Members

* [get\_breakage\_scalars](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1a5ccd372c25b095a9739c11dae8f02ab7)
* [get\_minimum\_fragment\_size](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1a39311189362162e429f060557815729c)
* [get\_original\_size](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1aca4e9c89438f779e191757c12103c65f)
* [get\_original\_volume](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1a22690da66add12be7a332bc4a0e596cc)
* [get\_particle\_group\_index](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1a6c9870ef714ee07eeb24bef485dac1b9)
* [get\_scalars](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1a624157a56984db93a967eb5cad75fa83)
* [get\_strength](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1abaff8573c455f7cf3793fefd8c43a793)
* [set\_as\_unbreakable](structIRockyBreakableParticle.md#structIRockyBreakableParticle_1a685c12928a91ee0fe62a243f35167d42)

## Public functions

### Function get\_minimum\_fragment\_size

<a id="structIRockyBreakableParticle_1a39311189362162e429f060557815729c"></a>

![][public]
![][const]


```cpp
double IRockyBreakableParticle::get_minimum_fragment_size() const
```




**Returns**:

The minimum size that a fragment generated at a breakage event of the particle can have. Please refer to the DEM Technical Manual for more information about how this parameter is defined.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_minimum_fragment_size"}]}`
-->

### Function get\_original\_volume

<a id="structIRockyBreakableParticle_1a22690da66add12be7a332bc4a0e596cc"></a>

![][public]
![][const]


```cpp
double IRockyBreakableParticle::get_original_volume() const
```




**Returns**:

The volume of the particle at the moment it enters a simulation.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_original_volume"}]}`
-->

### Function get\_particle\_group\_index

<a id="structIRockyBreakableParticle_1a6c9870ef714ee07eeb24bef485dac1b9"></a>

![][public]
![][const]


```cpp
int IRockyBreakableParticle::get_particle_group_index() const
```




**Returns**:

The index that identifies internally the particle group to which the particle belongs.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_particle_group_index"}]}`
-->

### Function get\_strength

<a id="structIRockyBreakableParticle_1abaff8573c455f7cf3793fefd8c43a793"></a>

![][public]
![][const]


```cpp
double IRockyBreakableParticle::get_strength() const
```




**Returns**:

A random value between 0 and 1 assigned to a particle at the time of generation. This value can be related to the breakage probability in a custom instantaneous breakage model.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_strength"}]}`
-->

### Function get\_original\_size

<a id="structIRockyBreakableParticle_1aca4e9c89438f779e191757c12103c65f"></a>

![][public]
![][const]


```cpp
double IRockyBreakableParticle::get_original_size() const
```




**Returns**:

The value of the particle's size at the moment it enters a simulation.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_original_size"}]}`
-->

### Function set\_as\_unbreakable

<a id="structIRockyBreakableParticle_1a685c12928a91ee0fe62a243f35167d42"></a>

![][public]
![][const]


```cpp
void IRockyBreakableParticle::set_as_unbreakable() const
```




**If this method is called during breakage initialization, the particle**:

will be marked to be ignored at all instantaneous breakage-related procedures during the simulation.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::set_as_unbreakable"}]}`
-->

### Function get\_scalars

<a id="structIRockyBreakableParticle_1a624157a56984db93a967eb5cad75fa83"></a>

![][public]


```cpp
IRockyParticleScalars IRockyBreakableParticle::get_scalars()
```




**Returns**:

An <code>[IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)</code> object, that gives access to all particle scalars variables defined in the project.



**Return type**: [IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_scalars"}]}`
-->

### Function get\_breakage\_scalars

<a id="structIRockyBreakableParticle_1a5ccd372c25b095a9739c11dae8f02ab7"></a>

![][public]


```cpp
IRockyParticleBreakageScalars IRockyBreakableParticle::get_breakage_scalars()
```




**Returns**:

An <code>[IRockyParticleBreakageScalars](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars)</code> object, that gives access to all particle breakage scalars variables defined in the project.



**Return type**: [IRockyParticleBreakageScalars](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyBreakableParticle::get_breakage_scalars"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)