<a id="structIRockyGeometryScalars"></a>
# Structure IRockyGeometryScalars

![][C++]
![][public]

**#include <rocky\_boundary\_scalars.hpp>**



When running a simulation, an <code>[IRockyGeometryScalars](structIRockyGeometryScalars.md#structIRockyGeometryScalars)</code> gives access to all geometry scalars defined in the project. Geometry scalars are special variables with a different value associated to every geometry in a project.

**Inherits from**:

* EntityScalars\< rocky20::BoundaryScalars \>

## Members

* [add\_scalar](structIRockyGeometryScalars.md#structIRockyGeometryScalars_1a870beada21c47f75239b2f523e1dfca1)
* [get\_scalar](structIRockyGeometryScalars.md#structIRockyGeometryScalars_1aa943cd14cadc5673b99e273f135e82e1)
* [max\_scalar](structIRockyGeometryScalars.md#structIRockyGeometryScalars_1aa5bd66e1850855de607d9499a7dfc0b4)
* [set\_scalar](structIRockyGeometryScalars.md#structIRockyGeometryScalars_1a566039747df70cbffa7bba5225906a5e)

## Public functions

<a id="structIRockyGeometryScalars_1aa943cd14cadc5673b99e273f135e82e1"></a>
### Function get\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyGeometryScalars::get_scalar(int scalar_index) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalars::get_scalar"}]}`
-->

<a id="structIRockyGeometryScalars_1a566039747df70cbffa7bba5225906a5e"></a>
### Function set\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryScalars::set_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalars::set_scalar"}]}`
-->

<a id="structIRockyGeometryScalars_1a870beada21c47f75239b2f523e1dfca1"></a>
### Function add\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryScalars::add_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalars::add_scalar"}]}`
-->

<a id="structIRockyGeometryScalars_1aa5bd66e1850855de607d9499a7dfc0b4"></a>
### Function max\_scalar

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyGeometryScalars::max_scalar(int scalar_index, double value) const
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalars::max_scalar"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)