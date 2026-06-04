# Structure IRockyAdhesionOutputData

<a id="structIRockyAdhesionOutputData"></a>

![][C++]
![][public]

**#include <rocky\_contact\_output\_data\_api.hpp>**



<code>[IRockyAdhesionOutputData](structIRockyAdhesionOutputData.md#structIRockyAdhesionOutputData)</code> is an interface to define some property values related to an adhesive contact in a custom adhesion model. The values defined through this interface include the normal and tangential components of the adhesion force.

## Members

* [set\_normal\_force](structIRockyAdhesionOutputData.md#structIRockyAdhesionOutputData_1ad7c2fa5fb68f60dfa44d4f24efa06c01)
* [set\_tangential\_force](structIRockyAdhesionOutputData.md#structIRockyAdhesionOutputData_1a99e185831e9028fe03fde885059767d0)

## Public functions

### Function set\_normal\_force

<a id="structIRockyAdhesionOutputData_1ad7c2fa5fb68f60dfa44d4f24efa06c01"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyAdhesionOutputData::set_normal_force(double value)
```




**This method sets the value of the normal component of the adhesion force calculated by a custom**:

adhesion model. Rocky will sum this force to both entities associated to the contact (two particles or a particle and a geometry triangle) using the appropriate signs. Please note that since an adhesion force is attractive, normally it must be defined with a negative sign (i.e. its orientation must be opposite to the normal component of the contact force).


**Parameters**:

* **value**: The normal component of the adhesive force just calculated using a custom adhesion model.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyAdhesionOutputData::set_normal_force"}]}`
-->

### Function set\_tangential\_force

<a id="structIRockyAdhesionOutputData_1a99e185831e9028fe03fde885059767d0"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyAdhesionOutputData::set_tangential_force(double3 value)
```




**This method can be used to set the value of the tangential component of the adhesion force **:

calculated by a custom adhesion model. Rocky will sum this force to both entities associated to the contact (two particles or a particle and a geometry triangle) using the appropriate signs. The use of this function is optional, since only in specific cases (like in a liquid bridge model) an adhesion model will need to specify a tangential force component.


**Parameters**:

* **value**: The tangential component of the adhesive force expressed in Cartesian coordinates.



**Parameters**:

* double3 **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyAdhesionOutputData::set_tangential_force"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)