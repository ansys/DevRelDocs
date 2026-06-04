# Structure IRockyParticleTransferScalars

<a id="structIRockyParticleTransferScalars"></a>

![][C++]
![][public]

**#include <rocky\_particle\_scalars.hpp>**



When running a simulation, an <code>[IRockyParticleTransferScalars](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars)</code> gives access to all particle transfer scalars defined in the project. Particle transfer scalars are special particle scalars whose values are reset automatically to zero at the beginning of a new time iteration.

**Inherits from**:

* EntityScalars\< rocky20::ParticleTransferScalars \>

## Members

* [add\_heat\_source](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1a8f0eeb9e7c46b0a82b746c80f7bcc3c2)
* [add\_heat\_transfer](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1a698d33f0f3ed82cf1a62ff21c881fb74)
* [add\_scalar](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1a20599ee8283e5adcb2af659ca7b60985)
* [get\_heat\_transfer](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1adb482691a11732335076edd8113087cd)
* [get\_scalar](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1aa840c5918e86e974c13e7d630251c5b4)
* [max\_scalar](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1a9cef39b6f42cca4284f2bd733ee4d173)
* [set\_heat\_transfer](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1a3990cc0e8e9d91d57cb4dd5edfebc8c1)
* [set\_scalar](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars_1a32a00ee4ca40287266b284214e8a2c9c)

## Public functions

### Function get\_heat\_transfer

<a id="structIRockyParticleTransferScalars_1adb482691a11732335076edd8113087cd"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleTransferScalars::get_heat_transfer() const
```




**Returns**:

The value of the total heat transfer rate to the particle at a given time. This is a built-in particle scalar defined inside the solver, enabled whenever a thermal model is active in the project.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::get_heat_transfer"}]}`
-->

### Function set\_heat\_transfer

<a id="structIRockyParticleTransferScalars_1a3990cc0e8e9d91d57cb4dd5edfebc8c1"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleTransferScalars::set_heat_transfer(const double value)
```




**This method sets the value of the heat transfer rate to the particle. This value**:

will be used in the thermal energy balance equation of the particle in order to update its temperature at the following timestep.


**Parameters**:

* **value**: The value of the heat transfer rate.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::set_heat_transfer"}]}`
-->

### Function add\_heat\_transfer

<a id="structIRockyParticleTransferScalars_1a698d33f0f3ed82cf1a62ff21c881fb74"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleTransferScalars::add_heat_transfer(const double value)
```




**This method sums a value to the current heat transfer rate to the particle.**:


**Parameters**:

* **value**: The value summed to the heat transfer rate.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::add_heat_transfer"}]}`
-->

### Function add\_heat\_source

<a id="structIRockyParticleTransferScalars_1a8f0eeb9e7c46b0a82b746c80f7bcc3c2"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleTransferScalars::add_heat_source(const double value)
```




**This method adds a value to the source term to the thermal energy balance**:

equation of a particle. The added value can be positive (heat is generated) or negative (heat is removed).


**Parameters**:

* **value**: The value of the thermal energy per unit time generated in or removed from the particle.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::add_heat_source"}]}`
-->

### Function get\_scalar

<a id="structIRockyParticleTransferScalars_1aa840c5918e86e974c13e7d630251c5b4"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleTransferScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::get_scalar"}]}`
-->

### Function set\_scalar

<a id="structIRockyParticleTransferScalars_1a32a00ee4ca40287266b284214e8a2c9c"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleTransferScalars::set_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::set_scalar"}]}`
-->

### Function add\_scalar

<a id="structIRockyParticleTransferScalars_1a20599ee8283e5adcb2af659ca7b60985"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleTransferScalars::add_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::add_scalar"}]}`
-->

### Function max\_scalar

<a id="structIRockyParticleTransferScalars_1a9cef39b6f42cca4284f2bd733ee4d173"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleTransferScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)