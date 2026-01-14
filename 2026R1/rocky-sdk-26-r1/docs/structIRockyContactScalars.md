# Structure IRockyContactScalars

<a id="structIRockyContactScalars"></a>

![][C++]
![][public]

**#include <rocky\_contact\_scalars.hpp>**



During the iterative process of a simulation, <code>[IRockyContactScalars](structIRockyContactScalars.md#structIRockyContactScalars)</code> gives access to all contact scalars defined in the project. These contact scalars can be built-in scalars defined in the Rocky solver, as well as custom contact scalars defined by the current module or other active modules.

**Inherits from**:

* EntityScalars\< rocky20::ContactScalars \>

## Members

* [add\_scalar](structIRockyContactScalars.md#structIRockyContactScalars_1a67c155eff0d5724c29859512b0d994de)
* [get\_scalar](structIRockyContactScalars.md#structIRockyContactScalars_1ad4f28cca964b58258b7011f0dc59040d)
* [max\_scalar](structIRockyContactScalars.md#structIRockyContactScalars_1a6413332aeb968cdc28e96a351deb3bcb)
* [set\_scalar](structIRockyContactScalars.md#structIRockyContactScalars_1abdde96805bdced6ebf4f7c2a1b5d9a70)

## Public functions

<a id="structIRockyContactScalars_1ad4f28cca964b58258b7011f0dc59040d"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContactScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalars::get_scalar"}]}`
-->

<a id="structIRockyContactScalars_1abdde96805bdced6ebf4f7c2a1b5d9a70"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyContactScalars::set_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalars::set_scalar"}]}`
-->

<a id="structIRockyContactScalars_1a67c155eff0d5724c29859512b0d994de"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyContactScalars::add_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalars::add_scalar"}]}`
-->

<a id="structIRockyContactScalars_1a6413332aeb968cdc28e96a351deb3bcb"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyContactScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)