<a id="structIRockySPHElementScalars"></a>
# Structure IRockySPHElementScalars

![][C++]
![][public]

**#include <rocky\_sph\_element\_scalars.hpp>**



When running a simulation, an <code>[IRockySPHElementScalars](structIRockySPHElementScalars.md#structIRockySPHElementScalars)</code> object gives access to all SPH element scalars defined in the project. These SPH element scalars can be built-in scalars defined within the Rocky solver, or custom SPH element scalars defined by the current module or other active modules.

**Inherits from**:

* EntityScalars\< rocky20::SPHParticleScalars \>

## Members

* [add\_heat\_transfer](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1ace6ee0291cca05f39eb04ba4c760afe0)
* [add\_scalar](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1a72d99d6c1f69b32a5e9e77325974b1f1)
* [add\_temperature](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1ae6f55ad8e1a6915cccbade3f199315a4)
* [add\_turbulent\_viscosity](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1a22c42af1b9c839d1693a42ac889a09df)
* [get\_heat\_transfer](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1a8a1580996da5f171f535de7e7487fe01)
* [get\_scalar](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1acf45b1ddd0d68df837ec264d2758693f)
* [get\_temperature](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1aa7d031c763a7c8c643ec7a86c07ae6d3)
* [get\_turbulent\_viscosity](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1af70cf6bb3041f4c5e9a8c336ea47b201)
* [get\_velocity\_gradient\_x](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1a21d991fe945a35f8c7a1f4dffd7c5fe4)
* [get\_velocity\_gradient\_y](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1a0b6e39222f53c9977ed3cdcf74cb4a9f)
* [get\_velocity\_gradient\_z](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1ace9533abcbc59ad7581a97d988d4c880)
* [max\_scalar](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1af020615c90124b8fe6d7168e964515b6)
* [set\_heat\_transfer](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1af40e66b6c4bbea654f110c9d42b3a72f)
* [set\_scalar](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1a5dae91ede893e406367059aae00764d5)
* [set\_temperature](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1aa04f956ddd857b6b6fd7e2a6fe44a494)
* [set\_turbulent\_viscosity](structIRockySPHElementScalars.md#structIRockySPHElementScalars_1aebb2bc65cb47b22517249ce65c8728a8)

## Public functions

<a id="structIRockySPHElementScalars_1acf45b1ddd0d68df837ec264d2758693f"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS _data_type IRockySPHElementScalars::get_scalar(int scalar_index) const
```




**If a custom scalar variable was defined during the setup of the module,**:

the value currently stored can be accessed with this method.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.


**Returns**:

The value currently stored in the scalar variable.



**Parameters**:

* int **scalar_index**

**Return type**: ROCKY_FUNCTIONS _data_type

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"float"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_scalar"}]}`
-->

<a id="structIRockySPHElementScalars_1af70cf6bb3041f4c5e9a8c336ea47b201"></a>
### Function get\_turbulent\_viscosity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElementScalars::get_turbulent_viscosity() const
```




**Returns**:

The value of the turbulent viscosity. Turbulent viscosity is a built-in SPH element scalar defined in the Rocky solver, whose values can be calculated either by a built-in model or by a custom module.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_turbulent_viscosity"}]}`
-->

<a id="structIRockySPHElementScalars_1aa7d031c763a7c8c643ec7a86c07ae6d3"></a>
### Function get\_temperature

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElementScalars::get_temperature() const
```




**Returns**:

The value of the temperature of the SPH element. Temperature is a built-in SPH element scalar defined by the Rocky solver, which is activated when a thermal model is enabled in a project.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_temperature"}]}`
-->

<a id="structIRockySPHElementScalars_1a8a1580996da5f171f535de7e7487fe01"></a>
### Function get\_heat\_transfer

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElementScalars::get_heat_transfer() const
```




**Returns**:

The value of the total heat transfer rate towards/from the SPH element. Heat transfer rate is a built-in SPH element scalar defined by the Rocky solver, which is activated when a thermal model is enabled in a project.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_heat_transfer"}]}`
-->

<a id="structIRockySPHElementScalars_1a21d991fe945a35f8c7a1f4dffd7c5fe4"></a>
### Function get\_velocity\_gradient\_x

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementScalars::get_velocity_gradient_x() const
```




**Returns**:

The gradient of the component of the SPH element velocity along the X-axis. Velocity gradients are built-in SPH element scalars defined by the Rocky solver, which is activated manually when a module calls <code>IRockySPHElementScalarsModel::enable_gradient_velocity()</code> at setup hook.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_velocity_gradient_x"}]}`
-->

<a id="structIRockySPHElementScalars_1a0b6e39222f53c9977ed3cdcf74cb4a9f"></a>
### Function get\_velocity\_gradient\_y

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementScalars::get_velocity_gradient_y() const
```




**Returns**:

The gradient of the component of the SPH element velocity along the Y-axis. Velocity gradients are built-in SPH element scalars defined by the Rocky solver, which is activated manually when a module calls <code>IRockySPHElementScalarsModel::enable_gradient_velocity()</code> at setup hook.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_velocity_gradient_y"}]}`
-->

<a id="structIRockySPHElementScalars_1ace9533abcbc59ad7581a97d988d4c880"></a>
### Function get\_velocity\_gradient\_z

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElementScalars::get_velocity_gradient_z() const
```




**Returns**:

The gradient of the component of the SPH element velocity along the Z-axis. Velocity gradients are built-in SPH element scalars defined by the Rocky solver, which is activated manually when a module calls <code>IRockySPHElementScalarsModel::enable_gradient_velocity()</code> at setup hook.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::get_velocity_gradient_z"}]}`
-->

<a id="structIRockySPHElementScalars_1a5dae91ede893e406367059aae00764d5"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::set_scalar(int scalar_index, _data_type value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to store a value on it.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be stored.



**Parameters**:

* int **scalar_index**
* _data_type **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"float"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::set_scalar"}]}`
-->

<a id="structIRockySPHElementScalars_1aebb2bc65cb47b22517249ce65c8728a8"></a>
### Function set\_turbulent\_viscosity

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::set_turbulent_viscosity(const float value)
```




**This method can be used by a custom module implementing a turbulent model in order to**:

set the value of the turbulent viscosity for later use in the flow equations.


**Parameters**:

* **value**: The value of the turbulent viscosity.



**Parameters**:

* const float **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::set_turbulent_viscosity"}]}`
-->

<a id="structIRockySPHElementScalars_1aa04f956ddd857b6b6fd7e2a6fe44a494"></a>
### Function set\_temperature

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::set_temperature(const float value)
```




**This method can be used by a custom module implementing a thermal model in order to**:

set the value of the temperature of a SPH element.


**Parameters**:

* **value**: The value of the temperature to be set.



**Parameters**:

* const float **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::set_temperature"}]}`
-->

<a id="structIRockySPHElementScalars_1af40e66b6c4bbea654f110c9d42b3a72f"></a>
### Function set\_heat\_transfer

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::set_heat_transfer(const float value)
```




**This method can be used by a custom module implementing a thermal model in order to**:

set the calculated value of the total heat transfer towards/from a SPH element.


**Parameters**:

* **value**: The value of the heat transfer rate to be set.



**Parameters**:

* const float **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::set_heat_transfer"}]}`
-->

<a id="structIRockySPHElementScalars_1a72d99d6c1f69b32a5e9e77325974b1f1"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::add_scalar(int scalar_index, _data_type value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to sum a value to the current one stored in it.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be summed to the current stored value.<br/>



**Parameters**:

* int **scalar_index**
* _data_type **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"float"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::add_scalar"}]}`
-->

<a id="structIRockySPHElementScalars_1a22c42af1b9c839d1693a42ac889a09df"></a>
### Function add\_turbulent\_viscosity

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::add_turbulent_viscosity(const float value)
```




**This method sums a value to the current turbulent viscosity stored for the SPH element.**:


**Parameters**:

* **value**: The value summed to the turbulent viscosity.



**Parameters**:

* const float **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::add_turbulent_viscosity"}]}`
-->

<a id="structIRockySPHElementScalars_1ae6f55ad8e1a6915cccbade3f199315a4"></a>
### Function add\_temperature

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::add_temperature(const float value)
```




**This method sums a value to the current temperature of a SPH element.**:


**Parameters**:

* **value**: The value to be added to the temperature.



**Parameters**:

* const float **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::add_temperature"}]}`
-->

<a id="structIRockySPHElementScalars_1ace6ee0291cca05f39eb04ba4c760afe0"></a>
### Function add\_heat\_transfer

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::add_heat_transfer(const float value)
```




**This method can be used for accumulating the heat transfer rate values that a**:

SPH element interchanges with the surrounding SPH elements, DEM elements and geometries.


**Parameters**:

* **value**: The heat transfer rate value to be added.



**Parameters**:

* const float **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::add_heat_transfer"}]}`
-->

<a id="structIRockySPHElementScalars_1af020615c90124b8fe6d7168e964515b6"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockySPHElementScalars::max_scalar(int scalar_index, _data_type value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to make the scalar store the maximum of a set of values. A common use of this method is, for instance, to find the maximum among a set of values associated to the contacts of a particle.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: A value that must be checked if it is greater than the current stored value.



**Parameters**:

* int **scalar_index**
* _data_type **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"float"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)