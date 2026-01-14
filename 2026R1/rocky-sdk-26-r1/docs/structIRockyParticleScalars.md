# Structure IRockyParticleScalars

<a id="structIRockyParticleScalars"></a>

![][C++]
![][public]

**#include <rocky\_particle\_scalars.hpp>**



When running a simulation, an <code>[IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)</code> gives access to all particle scalars defined in the project. These particle scalars can be built-in scalars defined in the Rocky solver, or custom particle scalars defined by the current module or other active modules.

**Inherits from**:

* EntityScalars\< rocky20::ParticleScalars \>

## Members

* [add\_explicit\_fluid\_heat\_transfer\_rate](structIRockyParticleScalars.md#structIRockyParticleScalars_1a879d37039a8dac11578b008f69510232)
* [add\_explicit\_fluid\_momentum](structIRockyParticleScalars.md#structIRockyParticleScalars_1ad8f1693fb8d2e2f901791f0d55ffafd9)
* [add\_implicit\_fluid\_heat\_transfer\_rate](structIRockyParticleScalars.md#structIRockyParticleScalars_1afc8afe09fcf6cbbc037884a382f40386)
* [add\_implicit\_fluid\_momentum](structIRockyParticleScalars.md#structIRockyParticleScalars_1a4ec6b9153716ae4de2399ce1cb148a35)
* [add\_mass\_increment](structIRockyParticleScalars.md#structIRockyParticleScalars_1ae7c53f46ae9e8420e3546939841cb267)
* [add\_scalar](structIRockyParticleScalars.md#structIRockyParticleScalars_1a7583200a98dabab00cb51f19e90356a4)
* [add\_temperature](structIRockyParticleScalars.md#structIRockyParticleScalars_1aae018069db36996a8d86fd9f6c18a0cf)
* [add\_volume\_increment](structIRockyParticleScalars.md#structIRockyParticleScalars_1a76d6d6d09083736d7e40bb09710bfa37)
* [get\_mass\_increment](structIRockyParticleScalars.md#structIRockyParticleScalars_1a228debc629b2c74943a35a6411e85e34)
* [get\_poisson\_ratio](structIRockyParticleScalars.md#structIRockyParticleScalars_1aa2e33b5ad44cf4487e8c28f69bab1bbc)
* [get\_scalar](structIRockyParticleScalars.md#structIRockyParticleScalars_1a22cb79d50006e74ccc257c1b7b7c65ce)
* [get\_specific\_heat](structIRockyParticleScalars.md#structIRockyParticleScalars_1a2e527a39101f66c5b8107634655f7ac0)
* [get\_temperature](structIRockyParticleScalars.md#structIRockyParticleScalars_1a4a64868ea5dae08ca841701423268d24)
* [get\_thermal\_conductivity](structIRockyParticleScalars.md#structIRockyParticleScalars_1a3c656901b88bf6938e16f0559e1f8554)
* [get\_volume\_increment](structIRockyParticleScalars.md#structIRockyParticleScalars_1a07d6c5c74fe0291617efe4f1c5c0b530)
* [max\_scalar](structIRockyParticleScalars.md#structIRockyParticleScalars_1a83a4b26c94d203d6b02708fa7ec52c65)
* [set\_mass\_increment](structIRockyParticleScalars.md#structIRockyParticleScalars_1add3b52baa679fb29168078afd6f414c4)
* [set\_poisson\_ratio](structIRockyParticleScalars.md#structIRockyParticleScalars_1a575c4ba7f23f9b8b0344964a5ddf4e01)
* [set\_scalar](structIRockyParticleScalars.md#structIRockyParticleScalars_1a18a2bdf028e0356b59e5c7bfa7d35a05)
* [set\_specific\_heat](structIRockyParticleScalars.md#structIRockyParticleScalars_1a161b925c5cb9660521995eae19230b98)
* [set\_temperature](structIRockyParticleScalars.md#structIRockyParticleScalars_1a52baa075b4469ce9c99fb3598b1e3495)
* [set\_thermal\_conductivity](structIRockyParticleScalars.md#structIRockyParticleScalars_1a2e9ff5092bd888f58d2441f26503717b)
* [set\_volume\_increment](structIRockyParticleScalars.md#structIRockyParticleScalars_1a1cf60c38b7d56949f4bd938a71139b3a)

## Public functions

<a id="structIRockyParticleScalars_1a4a64868ea5dae08ca841701423268d24"></a>
### Function get\_temperature

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_temperature() const
```




**Returns**:

The value of the current particle's temperature. Temperature is a built-in particle scalar defined in the solver, enabled whenever a thermal model is active in the project.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_temperature"}]}`
-->

<a id="structIRockyParticleScalars_1a228debc629b2c74943a35a6411e85e34"></a>
### Function get\_mass\_increment

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_mass_increment() const
```




**Returns**:

The value of the mass increment of the particle in relation to the initial mass at the time of entrance. Different physical processes can cause this mass increment. The mass increment is a built-in particle scalar defined in the solver.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_mass_increment"}]}`
-->

<a id="structIRockyParticleScalars_1a07d6c5c74fe0291617efe4f1c5c0b530"></a>
### Function get\_volume\_increment

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_volume_increment() const
```




**Returns**:

The value of the volume increment of the particle in relation to the initial volume at the time of entrance. Different physical processes can cause this volume increment. The volume increment is a built-in particle scalar defined in the solver.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_volume_increment"}]}`
-->

<a id="structIRockyParticleScalars_1a52baa075b4469ce9c99fb3598b1e3495"></a>
### Function set\_temperature

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_temperature(const double value)
```




**This method sets the value of the temperature of the particle.**:


**Parameters**:

* **value**: The value of the temperature.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_temperature"}]}`
-->

<a id="structIRockyParticleScalars_1add3b52baa679fb29168078afd6f414c4"></a>
### Function set\_mass\_increment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_mass_increment(const double value)
```




**This method sets the value of the mass increment of the particle in relation**:

to the initial mass at the time of entrance.


**Parameters**:

* **value**: The value of the mass increment.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_mass_increment"}]}`
-->

<a id="structIRockyParticleScalars_1a1cf60c38b7d56949f4bd938a71139b3a"></a>
### Function set\_volume\_increment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_volume_increment(const double value)
```




**This method sets the value of the volume increment of the particle in relation**:

to the initial volume at the time of entrance.


**Parameters**:

* **value**: The value of the volume increment.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_volume_increment"}]}`
-->

<a id="structIRockyParticleScalars_1aae018069db36996a8d86fd9f6c18a0cf"></a>
### Function add\_temperature

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_temperature(const double value)
```




**This method sums a value to the current temperature of the particle.**:


**Parameters**:

* **value**: The value summed to the temperature.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_temperature"}]}`
-->

<a id="structIRockyParticleScalars_1ad8f1693fb8d2e2f901791f0d55ffafd9"></a>
### Function add\_explicit\_fluid\_momentum

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_explicit_fluid_momentum(const double3 value)
```




**This method adds the particle's explicit contribution into the CFD momentum equation**:

associated to the cell where the particle centroid is located. This operation is valid only for two-way DEM-CFD coupling (please refer to the DEM-CFD Coupling Technical Manual for more details).


**Parameters**:

* **value**: The particle's explicit momentum contribution.



**Parameters**:

* const double3 **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_explicit_fluid_momentum"}]}`
-->

<a id="structIRockyParticleScalars_1a4ec6b9153716ae4de2399ce1cb148a35"></a>
### Function add\_implicit\_fluid\_momentum

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_implicit_fluid_momentum(const double value)
```




**This method adds the particle's implicit contribution into the CFD momentum equation**:

associated to the cell where the particle centroid is located. This operation is valid only for two-way DEM-CFD coupling (please refer to the DEM-CFD Coupling Technical Manual for more details).


**Parameters**:

* **value**: The coefficient associated to particle's implicit momentum contribution.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_implicit_fluid_momentum"}]}`
-->

<a id="structIRockyParticleScalars_1a879d37039a8dac11578b008f69510232"></a>
### Function add\_explicit\_fluid\_heat\_transfer\_rate

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_explicit_fluid_heat_transfer_rate(const double value)
```




**This method adds the particle's implicit contribution into the CFD thermal energy equation**:

associated to the cell where the particle centroid is located. This operation is valid only for thermal-enabled two-way DEM-CFD coupling (please refer to the DEM-CFD Coupling Technical Manual for more details).


**Parameters**:

* **value**: The particle's explicit heat transfer rate contribution.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_explicit_fluid_heat_transfer_rate"}]}`
-->

<a id="structIRockyParticleScalars_1afc8afe09fcf6cbbc037884a382f40386"></a>
### Function add\_implicit\_fluid\_heat\_transfer\_rate

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_implicit_fluid_heat_transfer_rate(const double value)
```




**// This method adds the particle's implicit contribution into the CFD thermal energy equation**:

associated to the cell where the particle centroid is located. This operation is valid only for thermal-enabled two-way DEM-CFD coupling (please refer to the DEM-CFD Coupling Technical Manual for more details).


**Parameters**:

* **value**: The particle's implicit heat transfer rate contribution.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_implicit_fluid_heat_transfer_rate"}]}`
-->

<a id="structIRockyParticleScalars_1ae7c53f46ae9e8420e3546939841cb267"></a>
### Function add\_mass\_increment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_mass_increment(const double value)
```




**This method sums a value to the current mass increment of the particle.**:


**Parameters**:

* **value**: The value summed to the mass increment.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_mass_increment"}]}`
-->

<a id="structIRockyParticleScalars_1a76d6d6d09083736d7e40bb09710bfa37"></a>
### Function add\_volume\_increment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_volume_increment(const double value)
```




**This method sums a value to the current volume increment of the particle.**:


**Parameters**:

* **value**: The value summed to the volume increment.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_volume_increment"}]}`
-->

<a id="structIRockyParticleScalars_1a3c656901b88bf6938e16f0559e1f8554"></a>
### Function get\_thermal\_conductivity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_thermal_conductivity() const
```




**Returns**:

The value of the thermal conductivity of the particle. The Rocky solver has a built-in particle scalar that once enabled allow particles to have a variable thermal conductivity, which overrides the constant value specified for the particle's material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_thermal_conductivity"}]}`
-->

<a id="structIRockyParticleScalars_1a2e9ff5092bd888f58d2441f26503717b"></a>
### Function set\_thermal\_conductivity

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_thermal_conductivity(const double value)
```




**This method sets the value of the thermal conductivity for the associated particle, if**:

the corresponding built-in particle scalar was enabled. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The value of the particle's thermal conductivity.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_thermal_conductivity"}]}`
-->

<a id="structIRockyParticleScalars_1a2e527a39101f66c5b8107634655f7ac0"></a>
### Function get\_specific\_heat

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_specific_heat() const
```




**Returns**:

The value of the specific heat of the particle. The Rocky solver has a built-in particle scalar that once enabled allow particles to have a variable specific heat, which overrides the constant value specified for the particle's material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_specific_heat"}]}`
-->

<a id="structIRockyParticleScalars_1a161b925c5cb9660521995eae19230b98"></a>
### Function set\_specific\_heat

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_specific_heat(const double value)
```




**This method sets the value of the specific heat for the associated particle, if**:

the corresponding built-in particle scalar was enabled. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The value of the particle's specific heat.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_specific_heat"}]}`
-->

<a id="structIRockyParticleScalars_1aa2e33b5ad44cf4487e8c28f69bab1bbc"></a>
### Function get\_poisson\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_poisson_ratio() const
```




**Returns**:

The value of the Poisson's ratio assigned to the particle. The Rocky solver has a built-in particle scalar that once enabled allow particles to have a variable Poisson's ratio, which overrides the constant value specified for the particle's material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_poisson_ratio"}]}`
-->

<a id="structIRockyParticleScalars_1a575c4ba7f23f9b8b0344964a5ddf4e01"></a>
### Function set\_poisson\_ratio

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_poisson_ratio(const double value)
```




**This method sets the value of the Poisson's ratio for the associated particle, if**:

the corresponding built-in particle scalar was enabled. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The value of the Poisson's ratio for the particle.



**Parameters**:

* const double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_poisson_ratio"}]}`
-->

<a id="structIRockyParticleScalars_1a22cb79d50006e74ccc257c1b7b7c65ce"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticleScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::get_scalar"}]}`
-->

<a id="structIRockyParticleScalars_1a18a2bdf028e0356b59e5c7bfa7d35a05"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::set_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::set_scalar"}]}`
-->

<a id="structIRockyParticleScalars_1a7583200a98dabab00cb51f19e90356a4"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::add_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::add_scalar"}]}`
-->

<a id="structIRockyParticleScalars_1a83a4b26c94d203d6b02708fa7ec52c65"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyParticleScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)