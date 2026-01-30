# Class IRockyAdhesiveDistanceData

<a id="classIRockyAdhesiveDistanceData"></a>

![][C++]
![][public]

**#include <rocky\_timestep\_api.h>**



An <code>[IRockyAdhesiveDistanceData](classIRockyAdhesiveDistanceData.md#classIRockyAdhesiveDistanceData)</code> object provides data and utility methods needed to estimate and set appropriate values of adhesive distance per material interaction. The adhesive distance defines the upper limit for the activation of an adhesive contact between two particles or between a particle and a geometry. An adhesive contact only can exist when the effective gap distance between two entities is below the adhesive distance value stipulated for the corresponding material interaction. Therefore, no adhesive forces will be computed if that effective gap distance is larger than the specified adhesive distance. If a custom module does not implement a special adhesive distance calculation, Rocky will set the adhesive distances of all material interactions to a fixed value equal to 1 mm.





The class <code>[IRockyAdhesiveDistanceData](classIRockyAdhesiveDistanceData.md#classIRockyAdhesiveDistanceData)</code> inherits all public methods of the class <code>[IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)</code>.

**Inherits from**:

* [IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)

## Members

* [get\_geometry\_material\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a05cb28a940233bc976b806a5893c639c)
* [get\_material](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a609eb08b9a568e07c35953bd616d9551)
* [get\_material\_interaction](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1aeb94fd8ed1f75bd0523634285ad94e4d)
* [get\_material\_interaction\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a1cf7ad2b906aa2f033494b390522bbb3)
* [get\_number\_geometry\_materials](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a986da6321cca08d20d20dbd43962a74a)
* [get\_number\_particle\_groups](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1ab5fb8e3d498bfc78f116eec7b53b22b8)
* [get\_particle\_material\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a700a3993ce6c50786c1323e0b91a7c3a)
* [get\_particle\_max\_sieve\_size](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1ac12016128279790932537b32c1c7410d)
* [get\_particle\_min\_mass](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a641adbab81c6c430aa1b0eae6eff29f4)
* [get\_particle\_min\_sieve\_size](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a1ce09b00f677c903a2d25426f8447300)
* [set\_adhesive\_distance](classIRockyAdhesiveDistanceData.md#classIRockyAdhesiveDistanceData_1a7d103731c5133db24f461e91e24e2f7a)

## Public functions

### Function set\_adhesive\_distance

<a id="classIRockyAdhesiveDistanceData_1a7d103731c5133db24f461e91e24e2f7a"></a>

![][public]


```cpp
void IRockyAdhesiveDistanceData::set_adhesive_distance(int home_index, int near_index, double adhesive_distance)
```




**This method sets a value of the adhesive distance per material interaction,**:

for a custom adhesive force model.


**Parameters**:

* **home_index**: The index of the first material.
* **near_index**: The index of the second material.
* **adhesive_distance**: The value of the adhesive distance just calculated.



**Parameters**:

* int **home_index**
* int **near_index**
* double **adhesive_distance**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyAdhesiveDistanceData::set_adhesive_distance"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"rocky__timestep__api_8h"},"children":[{"type":"text","text":"rocky_timestep_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)