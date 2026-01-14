# Structure IRockyFluidScalars

<a id="structIRockyFluidScalars"></a>

![][C++]
![][public]

**#include <rocky\_fluid\_scalars.hpp>**



During the iterative process of a simulation, <code>[IRockyFluidScalars](structIRockyFluidScalars.md#structIRockyFluidScalars)</code> gives access to all fluid scalars defined in the project. These fluid scalars can be built-in scalars defined in the Rocky solver, or custom fluid scalars defined by the current module or other active modules.

**Inherits from**:

* EntityScalars\< rocky20::FluidScalars \>

## Members

* [add\_scalar](structIRockyFluidScalars.md#structIRockyFluidScalars_1a536c29f3a14dc5bbed6047f43baa37ec)
* [get\_scalar](structIRockyFluidScalars.md#structIRockyFluidScalars_1a75d5c92f06422a5d29704788404405d0)
* [max\_scalar](structIRockyFluidScalars.md#structIRockyFluidScalars_1aaa969c416dea0ac4eb4721c5b8d75b24)
* [set\_scalar](structIRockyFluidScalars.md#structIRockyFluidScalars_1aec66ca90576555d400f9c6d401b049e4)

## Public functions

<a id="structIRockyFluidScalars_1a75d5c92f06422a5d29704788404405d0"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyFluidScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalars::get_scalar"}]}`
-->

<a id="structIRockyFluidScalars_1aec66ca90576555d400f9c6d401b049e4"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyFluidScalars::set_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to store a value on it.


**In the case of fluid scalars that are marked as additional variables to be shared with Fluent, **:

the value refers to the particle's contribution to the fluid cell, since Rocky will convert it to the cell value automatically by dividing by the cell volume [m3] which the particle belongs to, and by the CFD timestep [s].


**For example, when adding a mass source [kg] to the fluid, the value**:

will be converted to kg/m3.s before sending it to Fluent.


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be stored.



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalars::set_scalar"}]}`
-->

<a id="structIRockyFluidScalars_1a536c29f3a14dc5bbed6047f43baa37ec"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyFluidScalars::add_scalar(int scalar_index, double value) const
```




**If a custom scalar variable was defined during the setup of the module,**:

this method can be used to sum a value to the current one stored in it.


**In the case of fluid scalars that are marked as additional variables to be shared with Fluent, **:

the value refers to the particle's contribution to the fluid cell, since Rocky will convert it to the cell value automatically by dividing by the cell volume [m3] which the particle belongs to, and by the CFD timestep [s].


**For example, when adding a mass source [kg] to the fluid, the value**:

will be converted to kg/m3.s before sending it to Fluent.


**In the case of fluid scalars which are Fluent additional inputs, **:


**Parameters**:

* **scalar_index**: The integer index that was associated to the scalar variable during the setup of the module.
* **value**: The value that must be summed to the current stored value.<br/>



**Parameters**:

* int **scalar_index**
* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalars::add_scalar"}]}`
-->

<a id="structIRockyFluidScalars_1aaa969c416dea0ac4eb4721c5b8d75b24"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyFluidScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)