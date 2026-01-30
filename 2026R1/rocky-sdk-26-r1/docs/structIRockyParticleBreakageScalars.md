# Structure IRockyParticleBreakageScalars

<a id="structIRockyParticleBreakageScalars"></a>

![][C++]
![][public]

**#include <rocky\_particle\_scalars.hpp>**



When running a simulation, an <code>[IRockyParticleBreakageScalars](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars)</code> gives access to all particle breakage scalars defined in the project. Particle breakage scalars are special particle scalars which can be used to transfer data from the point where the instantaneous breakage criterion is evaluated (at the <code>ROCKY_PLUGIN_COMPUTE_INSTANTANEOUS_BREAKAGE</code> hook) to the point where the fragment size distribution is calculated (at the <code>ROCKY_PLUGIN_COMPUTE_FRAGMENTS_SIZE_DISTRIBUTION</code> hook).

**Inherits from**:

* EntityScalars\< rocky20::ParticleBreakageScalars \>

## Members

* [add\_scalar](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars_1a8c8fe58709bc4dcc7becc23e716483d6)
* [get\_scalar](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars_1af101f19299a5a1d5d3da3fe1d2a0f74b)
* [get\_t10](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars_1af47b2e930c6a25249584df9d3600945b)
* [max\_scalar](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars_1ad5d957f09f3fc73349741c296f66b7d1)
* [set\_scalar](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars_1a71109dbd97b7c53d5a001f6d8c66d66f)
* [set\_t10](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars_1afde7cd6ccf288b6e0834357e74344578)

## Public functions

### Function get\_t10

<a id="structIRockyParticleBreakageScalars_1af47b2e930c6a25249584df9d3600945b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleBreakageScalars::get_t10() const
```




**Returns**:

The value of the `formula {"type":"element","name":"formula","attributes":{"id":"3"},"children":[{"type":"text","text":"$t_{10}$"}]}` parameter set at an instantaneous breakage event. Please refer to the DEM Technical Manual for the definition of this parameter.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalars::get_t10"}]}`
-->

### Function set\_t10

<a id="structIRockyParticleBreakageScalars_1afde7cd6ccf288b6e0834357e74344578"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleBreakageScalars::set_t10(const double value)
```




**This method sets the value of the t10 parameter calculated at an instantaneous **:

breakage event. Please refer to the DEM Technical Manual for the definition of this parameter.


**Parameters**:

* **value**: The value of the `formula {"type":"element","name":"formula","attributes":{"id":"3"},"children":[{"type":"text","text":"$t_{10}$"}]}` parameter just calculated.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalars::set_t10"}]}`
-->

### Function get\_scalar

<a id="structIRockyParticleBreakageScalars_1af101f19299a5a1d5d3da3fe1d2a0f74b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleBreakageScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalars::get_scalar"}]}`
-->

### Function set\_scalar

<a id="structIRockyParticleBreakageScalars_1a71109dbd97b7c53d5a001f6d8c66d66f"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleBreakageScalars::set_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalars::set_scalar"}]}`
-->

### Function add\_scalar

<a id="structIRockyParticleBreakageScalars_1a8c8fe58709bc4dcc7becc23e716483d6"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleBreakageScalars::add_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalars::add_scalar"}]}`
-->

### Function max\_scalar

<a id="structIRockyParticleBreakageScalars_1ad5d957f09f3fc73349741c296f66b7d1"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleBreakageScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)