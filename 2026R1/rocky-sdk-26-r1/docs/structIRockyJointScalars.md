<a id="structIRockyJointScalars"></a>
# Structure IRockyJointScalars

![][C++]
![][public]

**#include <rocky\_joint\_scalars.hpp>**



When running a simulation an <code>[IRockyJointScalars](structIRockyJointScalars.md#structIRockyJointScalars)</code> object gives access to all joint scalars defined in the project. These joint scalars can be built-in scalars defined in the solver, or custom joint scalars defined by the current module or other active modules.

**Inherits from**:

* EntityScalars\< rocky20::JointScalars \>

## Members

* [add\_scalar](structIRockyJointScalars.md#structIRockyJointScalars_1abc05fdd6e7595ea79f4fa0aeafd93552)
* [get\_scalar](structIRockyJointScalars.md#structIRockyJointScalars_1a99bd176be9958223d6dc2a9e62f7ec30)
* [max\_scalar](structIRockyJointScalars.md#structIRockyJointScalars_1a5e95059b8068dc460f40119e2a58d32f)
* [set\_scalar](structIRockyJointScalars.md#structIRockyJointScalars_1a41d7ac3675a9d3ee3e79cd79c9de1f26)

## Public functions

<a id="structIRockyJointScalars_1a99bd176be9958223d6dc2a9e62f7ec30"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyJointScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalars::get_scalar"}]}`
-->

<a id="structIRockyJointScalars_1a41d7ac3675a9d3ee3e79cd79c9de1f26"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyJointScalars::set_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalars::set_scalar"}]}`
-->

<a id="structIRockyJointScalars_1abc05fdd6e7595ea79f4fa0aeafd93552"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyJointScalars::add_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalars::add_scalar"}]}`
-->

<a id="structIRockyJointScalars_1a5e95059b8068dc460f40119e2a58d32f"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyJointScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)