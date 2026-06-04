# Structure IRockyPairScalars

<a id="structIRockyPairScalars"></a>

![][C++]
![][public]

**#include <rocky\_pair\_scalars.hpp>**



When running a simulation, an <code>[IRockyPairScalars](structIRockyPairScalars.md#structIRockyPairScalars)</code> gives access to all pair scalars defined in the project. Pair scalars are special variables with a value attached to every combination of two particle groups and with each combination of a particle group and a geometry.

**Inherits from**:

* EntityScalars\< rocky20::PairScalars \>

## Members

* [add\_scalar](structIRockyPairScalars.md#structIRockyPairScalars_1ac4629dbc764141b132b43a4ed53c1412)
* [get\_scalar](structIRockyPairScalars.md#structIRockyPairScalars_1a2115866634ce54e7425ab949bb87d006)
* [max\_scalar](structIRockyPairScalars.md#structIRockyPairScalars_1ac5e39d90b8b54baf30023e7665d55555)
* [set\_scalar](structIRockyPairScalars.md#structIRockyPairScalars_1a5b7525f5f3d361571c0a2de51c61f189)

## Public functions

### Function get\_scalar

<a id="structIRockyPairScalars_1a2115866634ce54e7425ab949bb87d006"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyPairScalars::get_scalar(int scalar_index) const
```




**If a custom scalar variable was defined during the setup of the module,**:

the value currently stored can be accessed with this method.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.


**Returns**:

The value currently stored in the scalar variable.



**Parameters**:

* int **scalar_index**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalars::get_scalar"}]}`
-->

### Function set\_scalar

<a id="structIRockyPairScalars_1a5b7525f5f3d361571c0a2de51c61f189"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyPairScalars::set_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to store a value on it.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be stored.



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalars::set_scalar"}]}`
-->

### Function add\_scalar

<a id="structIRockyPairScalars_1ac4629dbc764141b132b43a4ed53c1412"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyPairScalars::add_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to sum a value to the current one stored in it.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be summed to the current stored value.<br/>



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalars::add_scalar"}]}`
-->

### Function max\_scalar

<a id="structIRockyPairScalars_1ac5e39d90b8b54baf30023e7665d55555"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyPairScalars::max_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to make the scalar store the maximum of a set of values. A common use of this method is, for instance, to find the maximum among a set of values associated to the contacts of a particle.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: A value that must be checked if it is greater than the current stored value.



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)