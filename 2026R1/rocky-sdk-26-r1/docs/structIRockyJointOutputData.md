# Structure IRockyJointOutputData

<a id="structIRockyJointOutputData"></a>

![][C++]
![][public]

**#include <rocky\_joint\_api.hpp>**





## Members

* [set\_force](structIRockyJointOutputData.md#structIRockyJointOutputData_1a73c6b5f900aa5916df2d2e10ba44cca3)
* [set\_home\_moment](structIRockyJointOutputData.md#structIRockyJointOutputData_1a4aa94a78c5ac86863e806a3948ee5a20)
* [set\_near\_moment](structIRockyJointOutputData.md#structIRockyJointOutputData_1a98238da308b6ce50bfa243a63a9842ae)

## Public functions

<a id="structIRockyJointOutputData_1a73c6b5f900aa5916df2d2e10ba44cca3"></a>
### Function set\_force

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyJointOutputData::set_force(const double3 &value)
```




This method must be used to set the value of the joint force calculated by the module. Rocky will sum subsequently this force to other forces acting on the linked elements, considering the proper signs, in order to solve the motion equations of those elements. The use of this method by a module implementing a joint model is mandatory.






**Parameters**:

* **force**: The vector force in Cartesian coordinates, just calculated by the module.



**Parameters**:

* const double3 & **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointOutputData::set_force"}]}`
-->

<a id="structIRockyJointOutputData_1a4aa94a78c5ac86863e806a3948ee5a20"></a>
### Function set\_home\_moment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyJointOutputData::set_home_moment(const double3 &value)
```




**This method must be used to set the value of the joint**:

moment acting on the home element. Rocky will sum subsequently this moment to other moments acting on that element, in order to solve the motion equations. The use of this method by a module implementing a joint model is mandatory.


**Parameters**:

* **moment**: The vector moment acting on the home element, in Cartesian coordinates.



**Parameters**:

* const double3 & **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointOutputData::set_home_moment"}]}`
-->

<a id="structIRockyJointOutputData_1a98238da308b6ce50bfa243a63a9842ae"></a>
### Function set\_near\_moment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyJointOutputData::set_near_moment(const double3 &value)
```




This method must be used to set the value of the joint moment acting on the near element. Rocky will sum subsequently this moment to other moments acting on that element, in order to solve the motion equations. The use of this method by a module implementing a joint model is mandatory.






**Parameters**:

* **moment**: The vector moment acting on the near element, in Cartesian coordinates.



**Parameters**:

* const double3 & **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointOutputData::set_near_moment"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)